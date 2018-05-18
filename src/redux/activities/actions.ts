import {IActivity, IMetaStatistics} from '@models';
import {action} from 'typesafe-actions';
import * as types from './types';

export const getActivitiesByContactFetched = (contactId: number) =>
  action(types.GET_ACTIVITIES_BY_CONTACT_FETCHED, {
    contactId,
  });

export const getActivitiesByContactSuccess = (
  contactId: number,
  activities: IActivity[],
  statistics: IMetaStatistics
) =>
  action(types.GET_ACTIVITIES_BY_CONTACT_SUCCESS, {
    activities,
    contactId,
    statistics,
  });

export const getActivitiesByContactFailed = (error: Error) =>
  action(types.GET_ACTIVITIES_BY_CONTACT_FAILED, {
    error,
  });
