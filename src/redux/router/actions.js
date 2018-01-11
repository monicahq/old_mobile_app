import * as types from './types';

export function navigate(routeName) {
  return {
    type: types.NAVIGATE,
    routeName: routeName,
  };
}

export function back() {
  return {
    type: types.BACK,
  };
}
