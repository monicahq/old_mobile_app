import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const setToken = createAction(types.SET_TOKEN, (token: string) => ({
  type: types.SET_TOKEN,
  token,
}));

export const logout = createAction(types.LOGOUT);

const actions = [setToken, logout].map($call);
export type IUserActions = typeof actions[number];
