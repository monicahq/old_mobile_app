import * as types from './types';
import * as noteTypes from '../notes/types';

const getAllInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: 0,
  items: [],
  count: null,
};

export const contactsReducer = (state = {}, action) => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_ALL_SUCCESS:
      const contacts = {...state};
      action.items.forEach(item => {
        if (!contacts[item.id]) {
          contacts[item.id] = item;
        }
      });
      return contacts;
    case noteTypes.GET_NOTES_BY_CONTACT_SUCCESS:
      const id = action.contactId;
      return {
        ...state,
        [id]: {
          ...state[id],
          notes: [
            ...(state[id].notes || []),
            ...action.notes.map(note => note.id),
          ],
        },
      };
  }

  return state;
};

export const getAllReducer = (state = getAllInitialState, action) => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_ALL_FETCHED:
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
