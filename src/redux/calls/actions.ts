import {ICall, IMetaStatistics} from '@models';
import {action} from 'typesafe-actions';
import * as types from './types';

export const getCallsByContactFetched = (contactId: number) =>
  action(types.GET_CALLS_BY_CONTACT_FETCHED, {
    contactId,
  });

export const getCallsByContactSuccess = (
  contactId: number,
  calls: ICall[],
  statistics: IMetaStatistics
) =>
  action(types.GET_CALLS_BY_CONTACT_SUCCESS, {
    calls,
    contactId,
    statistics,
  });

export const getCallsByContactFailed = (error: Error) =>
  action(types.GET_CALLS_BY_CONTACT_FAILED, {
    error,
  });
