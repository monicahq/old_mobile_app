import * as actions from './actions';

export function navigate(routeName) {
  return actions.navigate(routeName);
}

export function back() {
  return actions.back();
}

export function setState(state) {
  return actions.setState(state);
}

export function goToLaunchScreen() {
  return actions.goToLaunchScreen();
}
