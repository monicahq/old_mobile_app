import {AsyncStorage} from 'react-native';

import {API} from '@api';
import {tokenKey} from '@src/storage-keys';
import * as actions from './actions';

export type IUserSetTokenOperation = typeof setToken;
export type IUserLogoutOperation = typeof logout;

export function setToken(token: string) {
  API.setToken(token);
  // AsyncStorage.setItem(userKey, JSON.stringify(user));
  AsyncStorage.setItem(tokenKey, token);
  return actions.setToken(token);
}

export function logout() {
  API.setToken(null);
  // AsyncStorage.removeItem(userKey);
  AsyncStorage.removeItem(tokenKey);
  return actions.logout();
}
