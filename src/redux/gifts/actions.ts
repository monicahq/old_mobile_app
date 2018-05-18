import {IGift} from '@models';
import {action} from 'typesafe-actions';
import * as types from './types';

export const getGiftsByContactFetched = (contactId: number) =>
  action(types.GET_GIFTS_BY_CONTACT_FETCHED, {
    contactId,
  });

export const getGiftsByContactSuccess = (contactId: number, gifts: IGift[]) =>
  action(types.GET_GIFTS_BY_CONTACT_SUCCESS, {
    gifts,
    contactId,
  });

export const getGiftsByContactFailed = (error: Error) =>
  action(types.GET_GIFTS_BY_CONTACT_FAILED, {
    error,
  });
