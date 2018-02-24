import * as types from './types';

const getByContactInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: 0,
};

export const activitiesReducer = (state = {}, action) => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      const activities = {...state};
      action.activities.forEach(item => {
        if (!activities[item.id]) {
          activities[item.id] = item;
        }
      });

      return activities;
  }

  return state;
};

export const getByContactReducer = (
  state = getByContactInitialState,
  action,
) => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_ACTIVITIES_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: state.fetchedPageCount + 1,
      };

    case types.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_ACTIVITIES_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
  }

  return state;
};
