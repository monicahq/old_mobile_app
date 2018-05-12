import {
  IActivity,
  IMetaStatistics,
  IPageCountByContact,
  IRootAction,
} from '@models';
import * as types from './types';

export interface IActivitiesState {
  [activityId: number]: IActivity;
}
export interface IActivitiesGetByContactState {
  error: Error;
  isFetching: boolean;
  lastUpdated: number;
  fetchedPageCount: IPageCountByContact;
  statistics: IMetaStatistics;
}

const getByContactInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: {},
  statistics: {},
};

export const activitiesReducer = (
  state: IActivitiesState = {},
  action: IRootAction
): IActivitiesState => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      const activities = {...state};
      action.payload.activities.forEach(item => {
        if (!activities[item.id]) {
          activities[item.id] = item;
        }
      });

      return activities;
  }

  return state;
};

export const getByContactReducer = (
  state: IActivitiesGetByContactState = getByContactInitialState,
  action: IRootAction
): IActivitiesGetByContactState => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_ACTIVITIES_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: {
          [action.payload.contactId]:
            (state.fetchedPageCount[action.payload.contactId] || 0) + 1,
        },
      };

    case types.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
        statistics: action.payload.statistics,
      };

    case types.GET_ACTIVITIES_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  }

  return state;
};
