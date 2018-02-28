import * as actions from './actions';

import {API} from 'api';

export function getContacts() {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getAllContacts.isFetching ||
      state.getAllContacts.count === state.getAllContacts.items.length
    ) {
      return;
    }
    dispatch(actions.getContactsFetched());

    try {
      const res = await API.Contacts.getAll(
        state.getAllContacts.fetchedPageCount + 1,
      );
      dispatch(actions.getContactsSuccess(res.data, res.meta.total));
    } catch (e) {
      dispatch(actions.getContactsFailed(e));
    }
  };
}

export function searchContacts(query) {
  const thunk = async (dispatch, getState) => {
    const state = getState();

    if (query === undefined) {
      query = state.searchContacts.query;
    }

    console.log('-', query);
    if (
      state.searchContacts.isFetching ||
      state.searchContacts.count === state.searchContacts.items.length
    ) {
      return;
    }
    dispatch(actions.searchContactsFetched(query));

    if (!query) {
      return;
    }

    try {
      const res = await API.Contacts.getAll(
        state.searchContacts.fetchedPageCount + 1,
        undefined,
        query,
      );
      // const newState = getState();
      // if (newState.searchContacts.query !== query) {
      //   return;
      // }
      dispatch(actions.searchContactsSuccess(res.data, res.meta.total));
    } catch (e) {
      console.warn(e);
      // const newState = getState();
      // if (newState.searchContacts.query !== query) {
      //   return;
      // }
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
