import * as actions from './actions';

import {API} from 'api';

export function getRemindersByContact(contactId) {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getRemindersByContact.isFetching ||
      (state.contacts[contactId].reminders &&
        state.contacts[contactId].statistics.number_of_reminders ===
          state.contacts[contactId].reminders.length)
    ) {
      return;
    }

    dispatch(actions.getRemindersByContactFetched());

    try {
      const res = await API.Reminders.getAllByContact(
        contactId,
        state.getRemindersByContact.fetchedPageCount + 1,
      );
      dispatch(actions.getRemindersByContactSuccess(contactId, res.data));
    } catch (e) {
      dispatch(actions.getRemindersByContactFailed(e));
    }
  };
}
