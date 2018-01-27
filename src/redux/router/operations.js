import * as actions from './actions';
import {StatusBar} from 'react-native';

export function navigate(routeName, params) {
  return actions.navigate(routeName, params);
}

export function back() {
  return actions.back();
}

export function setState(state) {
  return actions.setState(state);
}

export function goToLaunchScreen() {
  StatusBar.setBarStyle('default');
  return actions.goToLaunchScreen();
}
