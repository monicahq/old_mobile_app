import {
  getNotesByContactFailed,
  getNotesByContactFetched,
  getNotesByContactSuccess,
} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Notes', () => {
    describe('Actions', () => {
      it('getNotesByContactFetched', () => {
        expect(getNotesByContactFetched(3)).toEqual({
          type: types.GET_NOTES_BY_CONTACT_FETCHED,
          contactId: 3,
        });
      });

      it('getNotesByContactSuccess', () => {
        const contactId = 5;
        const notes = ['item2', 'item1'];
        expect(getNotesByContactSuccess(contactId, notes)).toEqual({
          type: types.GET_NOTES_BY_CONTACT_SUCCESS,
          notes,
          contactId,
        });
      });

      it('getNotesByContactFailed', () => {
        const error = new Error('My error');
        expect(getNotesByContactFailed(error)).toEqual({
          type: types.GET_NOTES_BY_CONTACT_FAILED,
          error,
        });
      });
    });
  });
});
