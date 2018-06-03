import * as actions from './actions';

import {API} from '@api';

export type IContactsGetOperation = () => any;
export type IContactsSearchOperation = (query?) => any;

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
        state.getAllContacts.fetchedPageCount + 1
      );
      dispatch(actions.getContactsSuccess(res.data, res.meta.total));
    } catch (e) {
      dispatch(actions.getContactsFailed(e));
    }
  };
}

export function searchContacts(query?) {
  const thunk = async (dispatch, getState) => {
    const state = getState();

    if (query === undefined) {
      query = state.searchContacts.query;
    }

    if (
      state.searchContacts.query === query &&
      (state.searchContacts.isFetching ||
        state.searchContacts.count === state.searchContacts.items.length)
    ) {
      return;
    }
    dispatch(actions.searchContactsFetched(query));

    if (!query) {
      return;
    }

    try {
      const res = await API.Contacts.getAll(
        getState().searchContacts.fetchedPageCount + 1,
        undefined,
        query
      );
      dispatch(actions.searchContactsSuccess(res.data, res.meta.total));
    } catch (e) {
      dispatch(actions.searchContactsFailed(e));
    }
  };
  // TODO replace any
  (thunk as any).meta = {
    debounce: {
      time: 300,
      key: 'TRACK_CONTACTS_SEARCH',
    },
  };

  return thunk;
}
