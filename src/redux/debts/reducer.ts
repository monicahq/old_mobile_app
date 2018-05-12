import {IDebt, IPageCountByContact, IRootAction} from '@models';
import * as types from './types';

export interface IDebtsState {
  [debtId: number]: IDebt;
}
export interface IDebtsGetByContactState {
  error: Error;
  isFetching: boolean;
  lastUpdated: number;
  fetchedPageCount: IPageCountByContact;
}

const getByContactInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: {},
};

export const debtsReducer = (
  state: IDebtsState = {},
  action: IRootAction
): IDebtsState => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_DEBTS_BY_CONTACT_SUCCESS:
      const debts = {...state};
      action.payload.debts.forEach(item => {
        if (!debts[item.id]) {
          debts[item.id] = item;
        }
      });

      return debts;
  }

  return state;
};

export const getByContactReducer = (
  state: IDebtsGetByContactState = getByContactInitialState,
  action: IRootAction
): IDebtsGetByContactState => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_DEBTS_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: {
          [action.payload.contactId]:
            (state.fetchedPageCount[action.payload.contactId] || 0) + 1,
        },
      };

    case types.GET_DEBTS_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_DEBTS_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  }

  return state;
};
