import {getByContactReducer, activitiesReducer} from '../reducer';
import {
  getActivitiesByContactSuccess,
  getActivitiesByContactFailed,
  getActivitiesByContactFetched,
} from '../actions';
// import * as types from '../types';

describe('Redux', () => {
  describe('Activities', () => {
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
            getActivitiesByContactFetched(),
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: 1,
            isFetching: true,
          });
        });

        it('should handle success', () => {
          const contactId = 5;
          const activities = ['a'];
          const initialState = getByContactReducer(undefined, {});
          let state = getByContactReducer(
            initialState,
            getActivitiesByContactFetched(),
          );
          state = getByContactReducer(
            state,
            getActivitiesByContactSuccess(contactId, activities),
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
            getActivitiesByContactFetched(),
          );
          state = getByContactReducer(
            state,
            getActivitiesByContactFailed(error),
          );

          expect(state).toEqual({
            ...initialState,
            fetchedPageCount: 1,
            isFetching: false,
            error: error,
          });
        });
      });

      describe('activitiesReducer', () => {
        it('should return the initial state', () => {
          const state = activitiesReducer(undefined, {});

          expect(state).toEqual({});
        });

        it('should add contacts when success is returned', () => {
          const contactId = 5;
          const activities = [{id: 1, body: 'a'}, {id: 2, body: 'b'}];
          let state = activitiesReducer(undefined, {});
          state = activitiesReducer(
            state,
            getActivitiesByContactSuccess(contactId, activities),
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
