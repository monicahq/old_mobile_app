import {IRootAction} from '@models';
import * as types from './types';

export type ITokenState = string;

export const tokenReducer = (
  state: ITokenState = null,
  action: IRootAction
): ITokenState => {
  switch (action.type) {
    case types.SET_TOKEN:
      return action.payload.token;
    case types.LOGOUT:
      return null;
  }

  return state;
};
