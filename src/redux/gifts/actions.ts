import {IGift} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const getGiftsByContactFetched = createAction(
  types.GET_GIFTS_BY_CONTACT_FETCHED,
  (contactId: number) => ({
    type: types.GET_GIFTS_BY_CONTACT_FETCHED,
    contactId,
  })
);

export const getGiftsByContactSuccess = createAction(
  types.GET_GIFTS_BY_CONTACT_SUCCESS,
  (contactId: number, gifts: IGift[]) => ({
    type: types.GET_GIFTS_BY_CONTACT_SUCCESS,
    gifts,
    contactId,
  })
);

export const getGiftsByContactFailed = createAction(
  types.GET_GIFTS_BY_CONTACT_FAILED,
  (error: Error) => ({
    type: types.GET_GIFTS_BY_CONTACT_FAILED,
    error: true,
    payload: error,
  })
);

const actions = [
  getGiftsByContactFetched,
  getGiftsByContactSuccess,
  getGiftsByContactFailed,
].map($call);
export type IGiftsActions = typeof actions[number];
