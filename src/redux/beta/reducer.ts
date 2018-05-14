import {IRootAction} from '@models';
import * as types from './types';

export interface IBetaState {
  readonly ready: boolean;
  readonly isSubscribed: boolean;
}

const initialState: IBetaState = {
  ready: false,
  isSubscribed: false,
};

export const betaReducer = (
  state = initialState,
  action: IRootAction
): IBetaState => {
  switch (action.type) {
    case types.SUBSCRIBE_BETA:
      return {
        ready: true,
        isSubscribed: action.payload.isSubscribed,
      };
  }

  return state;
};
