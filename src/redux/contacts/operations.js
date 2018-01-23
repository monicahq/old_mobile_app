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
