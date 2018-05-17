import Frisbee from 'frisbee';
import {AsyncStorage, Platform, StatusBar} from 'react-native';

import {tokenKey, urlKey} from '@src/storage-keys';
import {Activities} from './activities';
import {Calls} from './calls';
import {Contacts} from './contacts';
import {Debts} from './debts';
import {Gifts} from './gifts';
import {Notes} from './notes';
import {Reminders} from './reminders';
import {Tasks} from './tasks';
import {User} from './user';

const frisbee = new Frisbee({
  baseURI: 'https://app.monicahq.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const API = {
  setToken: (token: string) => {
    frisbee.jwt(token);
  },
  setUrl: async (url: string) => {
    frisbee.opts.baseURI = url;
    AsyncStorage.setItem(urlKey, url);
  },
  User: new User(frisbee),
  Contacts: new Contacts(frisbee),
  Notes: new Notes(frisbee),
  Debts: new Debts(frisbee),
  Activities: new Activities(frisbee),
  Calls: new Calls(frisbee),
  Gifts: new Gifts(frisbee),
  Reminders: new Reminders(frisbee),
  Tasks: new Tasks(frisbee),
};

// Get url from phone storage and add it as base url
(async () => {
  try {
    const url = await AsyncStorage.getItem(urlKey);
    if (url) {
      frisbee.opts.baseURI = url;
    }
  } catch (err) {
    console.warn(err);
  }
})();

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
  request(path, options) {
    countPendingRequests++;
    setNetworkActivityIndicator();
    return [path, options];
  },
  requestError(err) {
    console.error(err);
    return Promise.reject(err);
  },
  response(response, a, b) {
    countPendingRequests--;
    setNetworkActivityIndicator();

    if (__DEV__) {
      // tslint:disable-next-line:no-console
      console.info('REQUEST', response.url, response.body);
    }
    return response;
  },
  responseError(err) {
    countPendingRequests--;
    setNetworkActivityIndicator();
    console.error(err);
    return Promise.reject(err);
  },
});
