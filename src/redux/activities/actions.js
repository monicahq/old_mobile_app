import * as types from './types';

export function getActivitiesByContactFetched(contactId) {
  return {
    type: types.GET_ACTIVITIES_BY_CONTACT_FETCHED,
    contactId,
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
