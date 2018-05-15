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
          payload: {contactId},
        });
      });

      it('getActivitiesByContactSuccess', () => {
        const contactId = 5;
        const activities = ['item2', 'item1'];
        const statistics = {2016: 10};
        expect(
          getActivitiesByContactSuccess(
            contactId,
            activities as any,
            statistics
          )
        ).toEqual({
          meta: undefined,
          type: types.GET_ACTIVITIES_BY_CONTACT_SUCCESS,
          payload: {
            activities,
            contactId,
            statistics,
          },
        });
      });

      it('getActivitiesByContactFailed', () => {
        const error = new Error('My error');
        expect(getActivitiesByContactFailed(error)).toEqual({
          type: types.GET_ACTIVITIES_BY_CONTACT_FAILED,
          payload: {error},
        });
      });
    });
  });
});
