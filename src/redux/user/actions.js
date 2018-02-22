import * as types from './types';

export function setToken(token) {
  return {
    type: types.SET_TOKEN,
    token,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
