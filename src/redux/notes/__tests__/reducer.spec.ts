import {
  getNotesByContactFailed,
  getNotesByContactFetched,
  getNotesByContactSuccess,
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
      });
    });
  });
});
