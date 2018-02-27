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
          contactId,
        });
      });

      it('getCallsByContactSuccess', () => {
        const contactId = 5;
        const calls = ['item2', 'item1'];
        expect(getCallsByContactSuccess(contactId, calls)).toEqual({
          type: types.GET_CALLS_BY_CONTACT_SUCCESS,
          calls,
          contactId,
        });
      });

      it('getCallsByContactFailed', () => {
        const error = new Error('My error');
        expect(getCallsByContactFailed(error)).toEqual({
          type: types.GET_CALLS_BY_CONTACT_FAILED,
          error,
        });
      });
    });
  });
});
