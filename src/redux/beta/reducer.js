import * as types from './types';

const initialState = {
  ready: false,
  isSubscribed: false,
};

export const betaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBSCRIBE_BETA:
      return {
        ready: true,
        isSubscribed: action.isSubscribed,
      };
  }

  return state;
};
