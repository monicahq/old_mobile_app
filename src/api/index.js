import Frisbee from 'frisbee';
import {AsyncStorage, StatusBar, Platform} from 'react-native';

import {User} from './user';
import {Contacts} from './contacts';
import {Notes} from './notes';
import {Debts} from './debts';
import {tokenKey} from 'storage-keys';

const frisbee = new Frisbee({
  baseURI: __DEV__
    ? 'https://monica-staging.frb.io'
    : 'https://app.monicahq.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const API = {
  setToken: token => {
    frisbee.jwt(token);
  },
  User: new User(frisbee),
  Contacts: new Contacts(frisbee),
  Notes: new Notes(frisbee),
  Debts: new Debts(frisbee),
};

// Get token from phone storage and add it to headers
(async () => {
  try {
    const token = await AsyncStorage.getItem(tokenKey);
    if (token) {
      frisbee.jwt(token);
    }
  } catch (err) {
    console.warn(err);
  }
})();

/**
 * Interceptor
 */

let countPendingRequests = 0;

const setNetworkActivityIndicator = () =>
  Platform.OS === 'ios' &&
  StatusBar.setNetworkActivityIndicatorVisible(!!countPendingRequests);

frisbee.interceptor.register({
  request: function(path, options) {
    countPendingRequests++;
    setNetworkActivityIndicator();
    return [path, options];
  },
  requestError: function(err) {
    console.error(err);
    return Promise.reject(err);
  },
  response: function(response, a, b) {
    countPendingRequests--;
    setNetworkActivityIndicator();

    if (__DEV__) {
      console.info('REQUEST', response.url, response.body);
    }
    return response;
  },
  responseError: function(err) {
    countPendingRequests--;
    setNetworkActivityIndicator();
    console.error(err);
    return Promise.reject(err);
  },
});
