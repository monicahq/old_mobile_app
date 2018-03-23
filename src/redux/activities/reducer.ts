import {IActivity, IPageCountByContact, IRootAction} from '@models';
import * as types from './types';

export interface IActivitiesState {
  [activityId: number]: IActivity;
}
export interface IActivitiesGetByContactState {
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

export const activitiesReducer = (
  state: IActivitiesState = {},
  action: IRootAction
): IActivitiesState => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      const activities = {...state};
      action.activities.forEach(item => {
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
          [action.contactId]:
            (state.fetchedPageCount[action.contactId] || 0) + 1,
        },
      };

    case types.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_ACTIVITIES_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
  }

  return state;
};
