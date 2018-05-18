import {action} from 'typesafe-actions';
import * as types from './types';

export const setToken = (token: string) =>
  action(types.SET_TOKEN, {
    token,
  });

export const logout = () => action(types.LOGOUT);
