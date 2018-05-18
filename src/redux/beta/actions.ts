import {action} from 'typesafe-actions';
import * as types from './types';

export const subscribeBeta = (isSubscribed: boolean) =>
  action(types.SUBSCRIBE_BETA, {
    isSubscribed,
  });
