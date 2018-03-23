import * as actions from './actions';

import {API} from '@api';

export type IDebtsGetByContactOperation = (contactId: number) => any;

export function getDebtsByContact(contactId: number) {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.getDebtsByContact.isFetching ||
      (state.contacts[contactId].debts &&
        state.contacts[contactId].statistics.number_of_debts ===
          state.contacts[contactId].debts.length)
    ) {
      return;
    }

    dispatch(actions.getDebtsByContactFetched(contactId));

    try {
      const res = await API.Debts.getAllByContact(
        contactId,
        (state.getDebtsByContact.fetchedPageCount[contactId] || 0) + 1
      );
      dispatch(actions.getDebtsByContactSuccess(contactId, res.data));
    } catch (e) {
      dispatch(actions.getDebtsByContactFailed(e));
    }
  };
}
