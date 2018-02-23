import * as actions from './actions';

import {API} from 'api';

export function getNotesByContact(contactId) {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getNotesByContact.isFetching ||
      (state.contacts[contactId].notes &&
        state.contacts[contactId].statistics.number_of_notes ===
          state.contacts[contactId].notes.length)
    ) {
      return;
    }

    dispatch(actions.getNotesByContactFetched());

    try {
      const res = await API.Notes.getAllByContact(
        contactId,
        state.getNotesByContact.fetchedPageCount + 1,
      );
      dispatch(actions.getNotesByContactSuccess(contactId, res.data));
    } catch (e) {
      dispatch(actions.getNotesByContactFailed(e));
    }
  };
}
