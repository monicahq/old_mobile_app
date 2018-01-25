import * as actions from './actions';
import {AsyncStorage} from 'react-native';
import {betaKey} from '../../storage-keys';

export function subscribeBeta(isSubscribed) {
  if (isSubscribed) {
    AsyncStorage.setItem(betaKey, 'true');
  } else {
    AsyncStorage.removeItem(betaKey);
  }
  return actions.subscribeBeta(isSubscribed);
}
