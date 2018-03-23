import * as actions from './actions';

import {API} from '@api';

export type IGiftsGetByContactOperation = (contactId: number) => any;

export function getGiftsByContact(contactId: number) {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getGiftsByContact.isFetching ||
      (state.contacts[contactId].gifts &&
        state.contacts[contactId].statistics.number_of_gifts ===
          state.contacts[contactId].gifts.length)
    ) {
      return;
    }

    dispatch(actions.getGiftsByContactFetched(contactId));

    try {
      const res = await API.Gifts.getAllByContact(
        contactId,
        (state.getGiftsByContact.fetchedPageCount[contactId] || 0) + 1
      );
      dispatch(actions.getGiftsByContactSuccess(contactId, res.data));
    } catch (e) {
      dispatch(actions.getGiftsByContactFailed(e));
    }
  };
}
