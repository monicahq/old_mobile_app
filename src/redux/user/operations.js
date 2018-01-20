import * as actions from './actions';
import {API} from '../../api';
import {AsyncStorage} from 'react-native';
import {tokenKey} from '../../storage-keys';

export function setToken(token) {
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
