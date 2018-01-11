import * as types from './types';

import {AppNavigator} from '../../navigator/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Login'),
);

export default function(state = initialState, action) {
  if (action.type === types.BACK || action.type === types.NAVIGATE) {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
  }

  return state;
}
