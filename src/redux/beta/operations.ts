import {AsyncStorage} from 'react-native';

import {betaKey} from '@src/storage-keys';
import * as actions from './actions';

export type IBetaSubscribeOperation = typeof subscribeBeta;

export function subscribeBeta(isSubscribed: boolean) {
  if (isSubscribed) {
    AsyncStorage.setItem(betaKey, 'true');
  } else {
    AsyncStorage.removeItem(betaKey);
  }
  return actions.subscribeBeta(isSubscribed);
}
