import Frisbee from 'frisbee';
import {AsyncStorage} from 'react-native';

import {User} from './user';
import {tokenKey} from '../storage-keys';

const frisbee = new Frisbee({
  baseURI: 'https://api.monicahq.com/api/login',
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
};

// Get token from phone storage and add it to headers
AsyncStorage.getItem(tokenKey)
  .then(token => {
    if (token) {
      frisbee.jwt(token);
    }
  })
  .catch(err => {
    console.warn(err);
  });
