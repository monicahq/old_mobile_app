import {
  getDebtsByContactFailed,
  getDebtsByContactFetched,
  getDebtsByContactSuccess,
} from '../actions';
import {debtsReducer, getByContactReducer} from '../reducer';
// import * as types from '../types';

describe('Redux', () => {
  describe('Debts', () => {
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
          const initialState = getByContactReducer(undefined, {} as any);
          const state = getByContactReducer(
            initialState,
            getDebtsByContactFetched(7)
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {7: 1},
            isFetching: true,
          });
        });

        it('should handle success', () => {
          const contactId = 5;
          const debts = ['a'];
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getDebtsByContactFetched(contactId)
          );
          state = getByContactReducer(
            state,
            getDebtsByContactSuccess(contactId, debts as any)
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {[contactId]: 1},
            isFetching: false,
            lastUpdated: state.lastUpdated,
          });
        });

        it('should handle failed', () => {
          const error = new Error();
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getDebtsByContactFetched(3)
          );
          state = getByContactReducer(state, getDebtsByContactFailed(error));

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {3: 1},
            isFetching: false,
            error,
          });
        });
      });

      describe('debtsReducer', () => {
        it('should return the initial state', () => {
          const state = debtsReducer(undefined, {} as any);

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const debts = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = debtsReducer(undefined, {} as any);
          state = debtsReducer(
            state,
            getDebtsByContactSuccess(contactId, debts as any)
          );

          expect(state).toEqual({
            [debts[0].id]: debts[0],
            [debts[1].id]: debts[1],
          });
        });
      });
    });
  });
});
