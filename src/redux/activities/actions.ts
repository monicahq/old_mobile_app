import {IActivity, IMetaStatistics} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const getActivitiesByContactFetched = createAction(
  types.GET_ACTIVITIES_BY_CONTACT_FETCHED,
  (contactId: number) => ({
    type: types.GET_ACTIVITIES_BY_CONTACT_FETCHED,
    contactId,
  })
);

export const getActivitiesByContactSuccess = createAction(
  types.GET_ACTIVITIES_BY_CONTACT_SUCCESS,
  (
    contactId: number,
    activities: IActivity[],
    statistics: IMetaStatistics
  ) => ({
    type: types.GET_ACTIVITIES_BY_CONTACT_SUCCESS,
    activities,
    contactId,
    statistics,
  })
);

export const getActivitiesByContactFailed = createAction(
  types.GET_ACTIVITIES_BY_CONTACT_FAILED,
  (error: Error) => ({
    type: types.GET_ACTIVITIES_BY_CONTACT_FAILED,
    error: true,
    payload: error,
  })
);

const actions = [
  getActivitiesByContactFetched,
  getActivitiesByContactSuccess,
  getActivitiesByContactFailed,
].map($call);
export type IActivitiesActions = typeof actions[number];
