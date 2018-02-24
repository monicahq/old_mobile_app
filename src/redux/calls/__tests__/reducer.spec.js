import {getByContactReducer, callsReducer} from '../reducer';
import {
  getCallsByContactSuccess,
  getCallsByContactFailed,
  getCallsByContactFetched,
} from '../actions';
// import * as types from '../types';

describe('Redux', () => {
  describe('Calls', () => {
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
            getCallsByContactFetched(),
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: 1,
            isFetching: true,
          });
        });

        it('should handle success', () => {
          const contactId = 5;
          const calls = ['a'];
          const initialState = getByContactReducer(undefined, {});
          let state = getByContactReducer(
            initialState,
            getCallsByContactFetched(),
          );
          state = getByContactReducer(
            state,
            getCallsByContactSuccess(contactId, calls),
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
            getCallsByContactFetched(),
          );
          state = getByContactReducer(state, getCallsByContactFailed(error));

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: 1,
            isFetching: false,
            error: error,
          });
        });
      });

      describe('callsReducer', () => {
        it('should return the initial state', () => {
          const state = callsReducer(undefined, {});

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const calls = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = callsReducer(undefined, {});
          state = callsReducer(
            state,
            getCallsByContactSuccess(contactId, calls),
          );

          expect(state).toEqual({
            [calls[0].id]: calls[0],
            [calls[1].id]: calls[1],
          });
        });
      });
    });
  });
});
