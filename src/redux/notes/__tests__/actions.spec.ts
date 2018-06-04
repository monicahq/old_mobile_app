import {
  addNote,
  deleteNote,
  getNotesByContactFailed,
  getNotesByContactFetched,
  getNotesByContactSuccess,
  updateNote,
  updateNoteId,
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

      it('addNote', () => {
        const note = {a: 'b'};
        expect(addNote(note as any)).toEqual({
          type: types.ADD_NOTE,
          payload: note,
        });
      });

      it('updateNoteId', () => {
        expect(updateNoteId(1, 2)).toEqual({
          type: types.UPDATE_NOTE_ID,
          payload: {
            noteId: 1,
            newId: 2,
          },
        });
      });

      it('deleteNote', () => {
        const note = {a: 'b'};
        expect(deleteNote(note as any)).toEqual({
          type: types.DELETE_NOTE,
          payload: {
            note,
          },
        });

        expect(deleteNote(note as any, 1)).toEqual({
          type: types.DELETE_NOTE,
          payload: {
            note,
            id: 1,
          },
        });
      });
    });
  });
});
