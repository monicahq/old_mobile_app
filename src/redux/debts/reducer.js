import * as types from './types';

const getByContactInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: {},
};

export const debtsReducer = (state = {}, action) => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_DEBTS_BY_CONTACT_SUCCESS:
      const debts = {...state};
      action.debts.forEach(item => {
        if (!debts[item.id]) {
          debts[item.id] = item;
        }
      });

      return debts;
  }

  return state;
};

export const getByContactReducer = (
  state = getByContactInitialState,
  action,
) => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_DEBTS_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: {
          [action.contactId]:
            (state.fetchedPageCount[action.contactId] || 0) + 1,
        },
      };

    case types.GET_DEBTS_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_DEBTS_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
  }

  return state;
};
