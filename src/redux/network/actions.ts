import {IContact} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const addToQueue = createAction(
  types.ADD_TO_QUEUE,
  (call: (...args) => void) => ({
    type: types.ADD_TO_QUEUE,
    call,
  })
);

const actions = [addToQueue].map($call);
export type INetworkActions = typeof actions[number];
