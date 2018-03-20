import {NavigationState} from 'react-navigation';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const navigate = createAction(
  types.NAVIGATE,
  (routeName: string, params?: any) => ({
    type: types.NAVIGATE,
    routeName,
    params,
  })
);

export const back = createAction(types.BACK);

export const setState = createAction(
  types.SET_STATE,
  (state: NavigationState) => ({
    type: types.SET_STATE,
    state,
  })
);

export const goToLaunchScreen = createAction(types.GO_TO_LAUNCH_SCREEN);

const actions = [navigate, back, setState, goToLaunchScreen].map($call);
export type IRouterActions = typeof actions[number];
