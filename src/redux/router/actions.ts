import {NavigationState} from 'react-navigation';
import {action, ActionsUnion} from 'typesafe-actions';
import * as types from './types';

export const navigate = (routeName: string, params?: any) =>
  action(types.NAVIGATE, {
    routeName,
    params,
  });

export const back = () => action(types.BACK);

export const setState = (state: NavigationState) =>
  action(types.SET_STATE, {
    state,
  });

export const goToLaunchScreen = () => action(types.GO_TO_LAUNCH_SCREEN);
