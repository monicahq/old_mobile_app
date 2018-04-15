import * as actions from './actions';

export function addToQueue(call: (...args) => void) {
  console.warn('addToQueue');
  return actions.addToQueue(call);
}
