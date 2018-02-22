import * as types from './types';

import {AppNavigator} from '../../navigator/AppNavigator';

const initialState = () =>
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Launch'),
  );

export const routerReducer = (state = initialState(), action) => {
  if (action.type === types.BACK || action.type === types.NAVIGATE) {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
  }
  if (action.type === types.GO_TO_LAUNCH_SCREEN) {
    return initialState();
  }
  if (action.type === types.SET_STATE) {
    return {...action.state};
  }

  return state;
};
