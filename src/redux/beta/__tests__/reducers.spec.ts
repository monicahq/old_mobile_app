import {subscribeBeta} from '../actions';
import {betaReducer as reducer} from '../reducer';

describe('Redux', () => {
  describe('Beta', () => {
    describe('Reducer', () => {
      it('should return the initial state', () => {
        const state = reducer(undefined, {} as any);

        expect(state).toEqual({isSubscribed: false, ready: false});
      });

      it('should be ready if any subscribeBeta is called', () => {
        const initialState = reducer(undefined, {} as any);

        const stateTrue = reducer(initialState, subscribeBeta(true));
        expect(stateTrue.ready).toBe(true);

        const stateFalse = reducer(initialState, subscribeBeta(false));
        expect(stateFalse.ready).toBe(true);
      });

      it('should be subscribed if subscribeBeta is called with true', () => {
        const initialState = reducer(undefined, {} as any);

        const state = reducer(initialState, subscribeBeta(true));
        expect(state.isSubscribed).toBe(true);
      });

      it('should not be subscribe if subscribeBeta is called with false', () => {
        const initialState = reducer(undefined, {} as any);

        const state = reducer(initialState, subscribeBeta(false));
        expect(state.isSubscribed).toBe(false);
      });
    });
  });
});
