import * as actions from './actions';

import {API} from 'api';

export function getContacts(shouldInvalidate) {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getAllContacts.isFetching ||
      (!shouldInvalidate &&
        state.getAllContacts.count === state.getAllContacts.items.length)
    ) {
      return;
    }
    dispatch(actions.getContactsFetched(shouldInvalidate));

    try {
      const page = !shouldInvalidate
        ? state.getAllContacts.fetchedPageCount + 1
        : 1;
      const res = await API.Contacts.getAll(page);
      dispatch(actions.getContactsSuccess(res.data, res.meta.total));
    } catch (e) {
      dispatch(actions.getContactsFailed(e));
    }
  };
}

export function searchContacts(query, shouldInvalidate) {
  const thunk = async (dispatch, getState) => {
    const state = getState();
    if (
      state.searchContacts.isFetching ||
      (!shouldInvalidate &&
        state.searchContacts.count === state.searchContacts.items.length)
    ) {
      return;
    }
    dispatch(actions.searchContactsFetched(query, shouldInvalidate));

    try {
      const page = !shouldInvalidate
        ? state.searchContacts.fetchedPageCount + 1
        : 1;
      const res = await API.Contacts.search(query, page);
      const newState = getState();
      if (newState.searchContacts.query !== query) {
        return;
      }
      dispatch(actions.searchContactsSuccess(res.data, res.meta.total));
    } catch (e) {
      console.warn(e);
      const newState = getState();
      if (newState.searchContacts.query !== query) {
        return;
      }
      dispatch(actions.searchContactsFailed(e));
    }
  };
  thunk.meta = {
    debounce: {
      time: 300,
      key: 'TRACK_CONTACTS_SEARCH',
    },
  };

  return thunk;
}
