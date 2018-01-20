import * as types from './types';

export function login(user, token) {
  return {
    type: types.LOGIN,
    user,
    token,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
