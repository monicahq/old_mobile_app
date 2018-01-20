import * as types from './types';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN:
      return action.user;
    case types.LOGOUT:
      return null;
  }

  return state;
};
export const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN:
      return action.token;
    case types.LOGOUT:
      return null;
  }

  return state;
};
