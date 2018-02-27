import {
  getActivitiesByContactFailed,
  getActivitiesByContactFetched,
  getActivitiesByContactSuccess,
} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Activities', () => {
    describe('Actions', () => {
      it('getActivitiesByContactFetched', () => {
        const contactId = 10;
        expect(getActivitiesByContactFetched(contactId)).toEqual({
          type: types.GET_ACTIVITIES_BY_CONTACT_FETCHED,
          contactId,
        });
      });

      it('getActivitiesByContactSuccess', () => {
        const contactId = 5;
        const activities = ['item2', 'item1'];
        expect(getActivitiesByContactSuccess(contactId, activities)).toEqual({
          type: types.GET_ACTIVITIES_BY_CONTACT_SUCCESS,
          activities,
          contactId,
        });
      });

      it('getActivitiesByContactFailed', () => {
        const error = new Error('My error');
        expect(getActivitiesByContactFailed(error)).toEqual({
          type: types.GET_ACTIVITIES_BY_CONTACT_FAILED,
          error,
        });
      });
    });
  });
});
