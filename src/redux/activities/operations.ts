import * as actions from './actions';

import {API} from '@api';

export type IActivitiesGetByContactOperation = (contactId: number) => any;

export function getActivitiesByContact(contactId: number) {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getActivitiesByContact.isFetching ||
      (state.contacts[contactId].activities &&
        state.contacts[contactId].statistics.number_of_activities ===
          state.contacts[contactId].activities.length)
    ) {
      return;
    }

    dispatch(actions.getActivitiesByContactFetched(contactId));

    try {
      const res = await API.Activities.getAllByContact(
        contactId,
        (state.getActivitiesByContact.fetchedPageCount[contactId] || 0) + 1
      );
      dispatch(
        actions.getActivitiesByContactSuccess(
          contactId,
          res.data,
          res.meta.statistics
        )
      );
    } catch (e) {
      dispatch(actions.getActivitiesByContactFailed(e));
    }
  };
}
