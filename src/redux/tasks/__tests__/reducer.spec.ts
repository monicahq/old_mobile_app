import {
  getTasksByContactFailed,
  getTasksByContactFetched,
  getTasksByContactSuccess,
} from '../actions';
import {getByContactReducer, tasksReducer} from '../reducer';
// import * as types from '../types';

describe('Redux', () => {
  describe('Tasks', () => {
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
            getTasksByContactFetched(contactId)
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
          const tasks = ['a'];
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getTasksByContactFetched(contactId)
          );
          state = getByContactReducer(
            state,
            getTasksByContactSuccess(contactId, tasks as any)
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
          const contactId = 10;
          const error = new Error();
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getTasksByContactFetched(contactId)
          );
          state = getByContactReducer(state, getTasksByContactFailed(error));

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

      describe('tasksReducer', () => {
        it('should return the initial state', () => {
          const state = tasksReducer(undefined, {} as any);

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const tasks = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = tasksReducer(undefined, {} as any);
          state = tasksReducer(
            state,
            getTasksByContactSuccess(contactId, tasks as any)
          );

          expect(state).toEqual({
            [tasks[0].id]: tasks[0],
            [tasks[1].id]: tasks[1],
          });
        });
      });
    });
  });
});
