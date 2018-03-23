import * as actions from './actions';

import {API} from '@api';

export type ITasksGetByContactOperation = (contactId: number) => any;

export function getTasksByContact(contactId: number) {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getTasksByContact.isFetching ||
      (state.contacts[contactId].tasks &&
        state.contacts[contactId].statistics.number_of_tasks ===
          state.contacts[contactId].tasks.length)
    ) {
      return;
    }

    dispatch(actions.getTasksByContactFetched(contactId));

    try {
      const res = await API.Tasks.getAllByContact(
        contactId,
        (state.getTasksByContact.fetchedPageCount[contactId] || 0) + 1
      );
      dispatch(actions.getTasksByContactSuccess(contactId, res.data));
    } catch (e) {
      dispatch(actions.getTasksByContactFailed(e));
    }
  };
}
