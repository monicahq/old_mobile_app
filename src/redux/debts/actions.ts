import {IDebt} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const getDebtsByContactFetched = createAction(
  types.GET_DEBTS_BY_CONTACT_FETCHED,
  (contactId: number) => ({
    type: types.GET_DEBTS_BY_CONTACT_FETCHED,
    contactId,
  })
);

export const getDebtsByContactSuccess = createAction(
  types.GET_DEBTS_BY_CONTACT_SUCCESS,
  (contactId: number, debts: IDebt[]) => ({
    type: types.GET_DEBTS_BY_CONTACT_SUCCESS,
    debts,
    contactId,
  })
);

export const getDebtsByContactFailed = createAction(
  types.GET_DEBTS_BY_CONTACT_FAILED,
  (error: Error) => ({
    type: types.GET_DEBTS_BY_CONTACT_FAILED,
    error: true,
    payload: error,
  })
);

const actions = [
  getDebtsByContactFetched,
  getDebtsByContactSuccess,
  getDebtsByContactFailed,
].map($call);
export type IDebtsActions = typeof actions[number];
