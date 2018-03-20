import {StatusBar} from 'react-native';
import {NavigationState} from 'react-navigation';
import * as actions from './actions';

export type IRouterNavigateOperation = typeof navigate;
export type IRouterBackOperation = typeof back;
export type IRouterSetStateOperation = typeof setState;
export type IRouterGoToLaunchScreenOperation = typeof goToLaunchScreen;

export function navigate(routeName: string, params?: any) {
  return actions.navigate(routeName, params);
}

export function back() {
  return actions.back();
}

export function setState(state: NavigationState) {
  return actions.setState(state);
}

export function goToLaunchScreen() {
  StatusBar.setBarStyle('default');
  return actions.goToLaunchScreen();
}
