import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const subscribeBeta = createAction(
  types.SUBSCRIBE_BETA,
  (isSubscribed: boolean) => ({
    type: types.SUBSCRIBE_BETA,
    isSubscribed,
  })
);

const actions = [subscribeBeta].map($call);
export type IBetaActions = typeof actions[number];
