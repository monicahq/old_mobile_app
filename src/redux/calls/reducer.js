import * as types from './types';

const getByContactInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: 0,
};

export const callsReducer = (state = {}, action) => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_CALLS_BY_CONTACT_SUCCESS:
      const calls = {...state};
      action.calls.forEach(item => {
        if (!calls[item.id]) {
          calls[item.id] = item;
        }
      });

      return calls;
  }

  return state;
};

export const getByContactReducer = (
  state = getByContactInitialState,
  action,
) => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_CALLS_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: state.fetchedPageCount + 1,
      };

    case types.GET_CALLS_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_CALLS_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
  }

  return state;
};
