import {IRootAction} from '@models';
import * as types from './types';

export type INetworkQueueState = Array<(...args) => void>;

export const networkQueueReducer = (state = [], action: IRootAction) => {
  switch (action.type) {
    case types.ADD_TO_QUEUE:
      console.log(action.call);
      return [...state, action.call];
  }
  return state;
};
