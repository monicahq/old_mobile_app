import {betaReducer as reducer} from '../reducer';
import {subscribeBeta} from '../actions';

describe('Redux', () => {
  describe('Beta', () => {
    describe('Reducer', () => {
      it('should return the initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual({isSubscribed: false, ready: false});
      });

      it('should be ready if any subscribeBeta is called', () => {
        let initialState = reducer(undefined, {});

        const stateTrue = reducer(initialState, subscribeBeta(true));
        expect(stateTrue.ready).toBe(true);

        const stateFalse = reducer(initialState, subscribeBeta(false));
        expect(stateFalse.ready).toBe(true);
      });

      it('should be subscribed if subscribeBeta is called with true', () => {
        let initialState = reducer(undefined, {});

        const state = reducer(initialState, subscribeBeta(true));
        expect(state.isSubscribed).toBe(true);
      });

      it('should not be subscribe if subscribeBeta is called with false', () => {
        let initialState = reducer(undefined, {});

        const state = reducer(initialState, subscribeBeta(false));
        expect(state.isSubscribed).toBe(false);
      });
    });
  });
});
