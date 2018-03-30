import {
  getCallsByContactFailed,
  getCallsByContactFetched,
  getCallsByContactSuccess,
} from '../actions';
import {callsReducer, getByContactReducer} from '../reducer';
// import * as types from '../types';

describe('Redux', () => {
  describe('Calls', () => {
    describe('Reducer', () => {
      describe('getByContactReducer', () => {
        it('should return the initial state', () => {
          const state = getByContactReducer(undefined, {} as any);

          expect(state).toEqual({
            error: null,
            fetchedPageCount: {},
            isFetching: false,
            lastUpdated: null,
            statistics: {},
          });
        });

        it('should handle fetched', () => {
          const initialState = getByContactReducer(undefined, {} as any);
          const state = getByContactReducer(
            initialState,
            getCallsByContactFetched(4)
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {4: 1},
            isFetching: true,
          });
        });

        it('should handle success', () => {
          const contactId = 5;
          const calls = ['a'];
          const statistics = {'2017': 100, '2015': 20};
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getCallsByContactFetched(contactId)
          );
          state = getByContactReducer(
            state,
            getCallsByContactSuccess(contactId, calls as any, statistics)
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {
              [contactId]: 1,
            },
            isFetching: false,
            lastUpdated: state.lastUpdated,
            statistics,
          });
        });

        it('should handle failed', () => {
          const error = new Error();
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getCallsByContactFetched(4)
          );
          state = getByContactReducer(state, getCallsByContactFailed(error));

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {4: 1},
            isFetching: false,
            error,
          });
        });
      });

      describe('callsReducer', () => {
        it('should return the initial state', () => {
          const state = callsReducer(undefined, {} as any);

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const calls = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = callsReducer(undefined, {} as any);
          state = callsReducer(
            state,
            getCallsByContactSuccess(contactId, calls as any, {})
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
