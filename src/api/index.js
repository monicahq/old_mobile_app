import Frisbee from 'frisbee';
import {AsyncStorage} from 'react-native';

import {User} from './user';
import {tokenKey} from '../storage-keys';

const frisbee = new Frisbee({
  baseURI: 'https://app.monicahq.com',
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

// frisbee.interceptor.register({
//   request: function(path, options) {
//     console.info(path, options);
//     // Read/Modify the path or options
//     // ...
//     return [path, options];
//   },
//   requestError: function(err) {
//     console.error(err);
//     // Handle an error occured in the request method
//     // ...
//     return Promise.reject(err);
//   },
//   response: function(response) {
//     console.info(response);
//     // Read/Modify the response
//     // ...
//     return response;
//   },
//   responseError: function(err) {
//     console.error(err);
//     // Handle error occured in api/response methods
//     return Promise.reject(err);
//   },
// });
