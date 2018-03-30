import {
  getActivitiesByContactFailed,
  getActivitiesByContactFetched,
  getActivitiesByContactSuccess,
} from '../actions';
import {activitiesReducer, getByContactReducer} from '../reducer';
// import * as types from '../types';

describe('Redux', () => {
  describe('Activities', () => {
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
            getActivitiesByContactFetched(5)
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: {
              5: 1,
            },
            isFetching: true,
          });
        });

        it('should handle success', () => {
          const contactId = 5;
          const activities = ['a'];
          const statistics = {'2017': 100, '2015': 20};
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getActivitiesByContactFetched(contactId)
          );
          state = getByContactReducer(
            state,
            getActivitiesByContactSuccess(
              contactId,
              activities as any,
              statistics
            )
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
          const contactId = 5;
          const error = new Error();
          const initialState = getByContactReducer(undefined, {} as any);
          let state = getByContactReducer(
            initialState,
            getActivitiesByContactFetched(contactId)
          );
          state = getByContactReducer(
            state,
            getActivitiesByContactFailed(error)
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

      describe('activitiesReducer', () => {
        it('should return the initial state', () => {
          const state = activitiesReducer(undefined, {} as any);

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const statistics = {'2017': 100, '2012': 20};
          const activities = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = activitiesReducer(undefined, {} as any);
          state = activitiesReducer(
            state,
            getActivitiesByContactSuccess(
              contactId,
              activities as any,
              statistics
            )
          );

          expect(state).toEqual({
            [activities[0].id]: activities[0],
            [activities[1].id]: activities[1],
          });
        });
      });
    });
  });
});
