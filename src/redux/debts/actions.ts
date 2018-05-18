import {IDebt} from '@models';
import {action} from 'typesafe-actions';
import * as types from './types';

export const getDebtsByContactFetched = (contactId: number) =>
  action(types.GET_DEBTS_BY_CONTACT_FETCHED, {
    contactId,
  });

export const getDebtsByContactSuccess = (contactId: number, debts: IDebt[]) =>
  action(types.GET_DEBTS_BY_CONTACT_SUCCESS, {
    debts,
    contactId,
  });

export const getDebtsByContactFailed = (error: Error) =>
  action(types.GET_DEBTS_BY_CONTACT_FAILED, {
    error,
  });
