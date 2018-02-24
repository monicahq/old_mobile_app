import {getByContactReducer, remindersReducer} from '../reducer';
import {
  getRemindersByContactSuccess,
  getRemindersByContactFailed,
  getRemindersByContactFetched,
} from '../actions';
// import * as types from '../types';

describe('Redux', () => {
  describe('Reminders', () => {
    describe('Reducer', () => {
      describe('getByContactReducer', () => {
        it('should return the initial state', () => {
          const state = getByContactReducer(undefined, {});

          expect(state).toEqual({
            error: null,
            fetchedPageCount: 0,
            isFetching: false,
            lastUpdated: null,
          });
        });

        it('should handle fetched', () => {
          const initialState = getByContactReducer(undefined, {});
          const state = getByContactReducer(
            initialState,
            getRemindersByContactFetched(),
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: 1,
            isFetching: true,
          });
        });

        it('should handle success', () => {
          const contactId = 5;
          const reminders = ['a'];
          const initialState = getByContactReducer(undefined, {});
          let state = getByContactReducer(
            initialState,
            getRemindersByContactFetched(),
          );
          state = getByContactReducer(
            state,
            getRemindersByContactSuccess(contactId, reminders),
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: 1,
            isFetching: false,
            lastUpdated: state.lastUpdated,
          });
        });

        it('should handle failed', () => {
          const error = new Error();
          const initialState = getByContactReducer(undefined, {});
          let state = getByContactReducer(
            initialState,
            getRemindersByContactFetched(),
          );
          state = getByContactReducer(
            state,
            getRemindersByContactFailed(error),
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: 1,
            isFetching: false,
            error: error,
          });
        });
      });

      describe('remindersReducer', () => {
        it('should return the initial state', () => {
          const state = remindersReducer(undefined, {});

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const reminders = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = remindersReducer(undefined, {});
          state = remindersReducer(
            state,
            getRemindersByContactSuccess(contactId, reminders),
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
