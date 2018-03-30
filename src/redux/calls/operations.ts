import * as actions from './actions';

import {API} from '@api';

export type ICallsGetByContactOperation = (contactId: number) => any;

export function getCallsByContact(contactId: number) {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getCallsByContact.isFetching ||
      (state.contacts[contactId].calls &&
        state.contacts[contactId].statistics.number_of_calls ===
          state.contacts[contactId].calls.length)
    ) {
      return;
    }

    dispatch(actions.getCallsByContactFetched(contactId));

    try {
      const res = await API.Calls.getAllByContact(
        contactId,
        (state.getCallsByContact.fetchedPageCount[contactId] || 0) + 1
      );
      dispatch(
        actions.getCallsByContactSuccess(
          contactId,
          res.data,
          res.meta.statistics
        )
      );
    } catch (e) {
      dispatch(actions.getCallsByContactFailed(e));
    }
  };
}
