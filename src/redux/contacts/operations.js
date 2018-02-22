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
