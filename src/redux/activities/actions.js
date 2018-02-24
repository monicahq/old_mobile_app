import * as types from './types';

export function getActivitiesByContactFetched() {
  return {
    type: types.GET_ACTIVITIES_BY_CONTACT_FETCHED,
  };
}

export function getActivitiesByContactSuccess(contactId, activities) {
  return {
    type: types.GET_ACTIVITIES_BY_CONTACT_SUCCESS,
    activities,
    contactId,
  };
}

export function getActivitiesByContactFailed(error) {
  return {
    type: types.GET_ACTIVITIES_BY_CONTACT_FAILED,
    error,
  };
}
