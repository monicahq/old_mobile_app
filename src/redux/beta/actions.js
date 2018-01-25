import * as types from './types';

export function subscribeBeta(isSubscribed) {
  return {
    type: types.SUBSCRIBE_BETA,
    isSubscribed,
  };
}
