import {
  getNotesByContactFailed,
  getNotesByContactFetched,
  getNotesByContactSuccess,
  updateNote,
} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Notes', () => {
    describe('Actions', () => {
      it('getNotesByContactFetched', () => {
        expect(getNotesByContactFetched(3)).toEqual({
          type: types.GET_NOTES_BY_CONTACT_FETCHED,
          payload: {contactId: 3},
        });
      });

      it('getNotesByContactSuccess', () => {
        const contactId = 5;
        const notes = ['item2', 'item1'];
        expect(getNotesByContactSuccess(contactId, notes as any)).toEqual({
          type: types.GET_NOTES_BY_CONTACT_SUCCESS,
          payload: {
            notes,
            contactId,
          },
        });
      });

      it('getNotesByContactFailed', () => {
        const error = new Error('My error');
        expect(getNotesByContactFailed(error)).toEqual({
          type: types.GET_NOTES_BY_CONTACT_FAILED,
          payload: {error},
        });
      });

      it('updateNote', () => {
        const note = {a: 'b'};
        expect(updateNote(note as any)).toEqual({
          type: types.UPDATE_NOTE,
          payload: note,
        });
      });
    });
  });
});
