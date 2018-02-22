import * as types from './types';

const getAllInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: 0,
  done: false,
  items: [],
  count: null,
};

const searchInitialState = {
  query: '',
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: 0,
  done: false,
  items: [],
  count: null,
};

export const contactsReducer = (state = {}, action) => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_ALL_SUCCESS:
    case types.SEARCH_SUCCESS:
      const contacts = {...state};
      action.items.forEach(item => {
        if (!contacts[item.id]) {
          contacts[item.id] = item;
        }
      });

      return contacts;
  }

  return state;
};

export const getAllReducer = (state = getAllInitialState, action) => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_ALL_FETCHED:
      if (action.shouldInvalidate) {
        return {
          ...getAllInitialState,
          isFetching: true,
          fetchedPageCount: 1,
        };
      }

      return {
        ...state,
        error: null,
        isFetching: true,
        lastUpdated: state.lastUpdated,
        fetchedPageCount: state.fetchedPageCount + 1,
      };

    // GET ALL SUCCESS
    case types.GET_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
        items: [...state.items, ...action.items.map(item => item.id)],
        count: action.count,
      };

    // GET ALL FAILED
    case types.GET_ALL_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
  }

  return state;
};

export const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.SEARCH_FETCHED:
      if (action.shouldInvalidate) {
        return {
          ...searchInitialState,
          query: action.query,
          isFetching: true,
          fetchedPageCount: 1,
        };
      }

      return {
        ...state,
        query: action.query,
        error: null,
        isFetching: true,
        lastUpdated: state.lastUpdated,
        fetchedPageCount: state.fetchedPageCount + 1,
      };

    // GET ALL SUCCESS
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
        items: [...state.items, ...action.items.map(item => item.id)],
        count: action.count,
      };

    // GET ALL FAILED
    case types.SEARCH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
  }

  return state;
};
