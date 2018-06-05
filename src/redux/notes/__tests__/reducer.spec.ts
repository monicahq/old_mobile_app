import {
  addNote,
  deleteNote,
  getNotesByContactFailed,
  getNotesByContactFetched,
  getNotesByContactSuccess,
  updateNote,
  updateNoteId,
} from '../actions';
import {getByContactReducer, notesReducer} from '../reducer';
// import * as types from '../types';

describe('Redux', () => {
  describe('Notes', () => {
    describe('Reducer', () => {
      describe('getByContactReducer', () => {
        it('should return the initial state', () => {
          const state = getByContactReducer(undefined, {} as any);

          expect(state).toEqual({
            error: null,
            fetchedPageCount: {},
            isFetching: false,
            lastUpdated: null,
          });
        });

        it('should handle fetched', () => {
          const contactId = 91;
          const initialState = getByContactReducer(undefined, {} as any);
          const state = getByContactReducer(
            initialState,
            getNotesByContactFetched(contactId)
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {
              [contactId]: 1,
            },
            isFetching: true,
          });
        });

        it('should handle success', () => {
          const contactId = 5;
          const notes = ['a'];
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getNotesByContactFetched(contactId)
          );
          state = getByContactReducer(
            state,
            getNotesByContactSuccess(contactId, notes as any)
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {
              [contactId]: 1,
            },
            isFetching: false,
            lastUpdated: state.lastUpdated,
          });
        });

        it('should handle failed', () => {
          const contactId = 16;
          const error = new Error();
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getNotesByContactFetched(contactId)
          );
          state = getByContactReducer(state, getNotesByContactFailed(error));

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {
              [contactId]: 1,
            },
            isFetching: false,
            error,
          });
        });
      });

      describe('notesReducer', () => {
        it('should return the initial state', () => {
          const state = notesReducer(undefined, {} as any);

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const notes = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = notesReducer(undefined, {} as any);
          state = notesReducer(
            state,
            getNotesByContactSuccess(contactId, notes as any)
          );

          expect(state).toEqual({
            [notes[0].id]: notes[0],
            [notes[1].id]: notes[1],
          });
        });

        it('should handle update', () => {
          const note1 = {id: 1, body: 'a'};
          const note2 = {id: 2, body: 'b'};
          const notes = {1: note1, 2: note2};
          let state = notesReducer(notes as any, {} as any);

          const updatedNote1 = {...note1, created_at: 'plouf'};
          state = notesReducer(notes as any, updateNote(updatedNote1 as any));

          expect(state).toEqual({
            [note1.id]: updatedNote1,
            [note2.id]: note2,
          });
        });
      });

      it('should handle add', () => {
        const note1 = {id: 1, body: 'a'};
        const note2 = {id: 2, body: 'b'};
        const notes = {1: note1, 2: note2};
        let state = notesReducer(notes as any, {} as any);

        const note3 = {id: 3, body: 'c'};
        state = notesReducer(notes as any, addNote(note3 as any));

        expect(state).toEqual({
          [note1.id]: note1,
          [note2.id]: note2,
          [note3.id]: note3,
        });
      });

      it('should handle delete', () => {
        const note1 = {id: 1, body: 'a'};
        const note2 = {id: 2, body: 'b'};
        const notes = {1: note1, 2: note2};
        let state = notesReducer(notes as any, {} as any);

        state = notesReducer(notes as any, deleteNote(note1 as any));

        expect(state).toEqual({
          [note2.id]: note2,
        });
      });

      it('should handle updateNoteId', () => {
        const note1 = {id: 1, body: 'a'};
        const note2 = {id: 2, body: 'b'};
        const notes = {1: note1, 2: note2};
        let state = notesReducer(notes as any, {} as any);

        state = notesReducer(notes as any, updateNoteId(1, 3));

        expect(state).toEqual({
          3: {...note1, id: 3},
          [note2.id]: note2,
        });
      });
    });
  });
});
