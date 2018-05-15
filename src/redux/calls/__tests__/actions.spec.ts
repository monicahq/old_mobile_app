import {
  getCallsByContactFailed,
  getCallsByContactFetched,
  getCallsByContactSuccess,
} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Calls', () => {
    describe('Actions', () => {
      it('getCallsByContactFetched', () => {
        const contactId = 10;
        expect(getCallsByContactFetched(contactId)).toEqual({
          type: types.GET_CALLS_BY_CONTACT_FETCHED,
          payload: {contactId},
        });
      });

      it('getCallsByContactSuccess', () => {
        const contactId = 5;
        const calls = ['item2', 'item1'];
        const statistics = {2016: 10};
        expect(
          getCallsByContactSuccess(contactId, calls as any, statistics)
        ).toEqual({
          type: types.GET_CALLS_BY_CONTACT_SUCCESS,
          payload: {
            calls,
            contactId,
            statistics,
          },
        });
      });

      it('getCallsByContactFailed', () => {
        const error = new Error('My error');
        expect(getCallsByContactFailed(error)).toEqual({
          type: types.GET_CALLS_BY_CONTACT_FAILED,
          payload: {error},
        });
      });
    });
  });
});
