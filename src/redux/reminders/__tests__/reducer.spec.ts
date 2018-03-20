import {
  getRemindersByContactFailed,
  getRemindersByContactFetched,
  getRemindersByContactSuccess,
} from '../actions';
import {getByContactReducer, remindersReducer} from '../reducer';
// import * as types from '../types';

describe('Redux', () => {
  describe('Reminders', () => {
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
          const contactId = 5;
          const initialState = getByContactReducer(undefined, {} as any);
          const state = getByContactReducer(
            initialState,
            getRemindersByContactFetched(contactId)
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
          const reminders = ['a'];
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getRemindersByContactFetched(contactId)
          );
          state = getByContactReducer(
            state,
            getRemindersByContactSuccess(contactId, reminders as any)
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
          const contactId = 5;
          const error = new Error();
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getRemindersByContactFetched(contactId)
          );
          state = getByContactReducer(
            state,
            getRemindersByContactFailed(error)
          );

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

      describe('remindersReducer', () => {
        it('should return the initial state', () => {
          const state = remindersReducer(undefined, {} as any);

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const reminders = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = remindersReducer(undefined, {} as any);
          state = remindersReducer(
            state,
            getRemindersByContactSuccess(contactId, reminders as any)
          );

          expect(state).toEqual({
            [reminders[0].id]: reminders[0],
            [reminders[1].id]: reminders[1],
          });
        });
      });
    });
  });
});
