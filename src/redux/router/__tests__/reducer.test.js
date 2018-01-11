import reducer from '../reducer';
import {navigate, back} from '../actions';

describe('Router', () => {
  describe('Reducer', () => {
    it('should return the initial state (Launch route)', () => {
      const state = reducer(undefined, {});

      expect(state.index).toBe(0);
      expect(Array.isArray(state.routes)).toBe(true);
      expect(state.routes.length).toBe(1);
      expect(state.routes[0].routeName).toBe('Launch');
    });

    it('should navigate to the Login Route', () => {
      let state = reducer(undefined, {});
      state = reducer(state, navigate('Login'));

      expect(state.index).toBe(1);
      expect(Array.isArray(state.routes)).toBe(true);
      expect(state.routes.length).toBe(2);

      expect(state.routes[0].routeName).toBe('Launch');
      expect(state.routes[1].routeName).toBe('Login');
    });

    it('should back to the Launch route', () => {
      let state = reducer(undefined, {});
      state = reducer(state, navigate('Login'));
      state = reducer(state, back());

      expect(state.index).toBe(0);
      expect(Array.isArray(state.routes)).toBe(true);
      expect(state.routes.length).toBe(1);
      expect(state.routes[0].routeName).toBe('Launch');
    });

    it('should return the state if an invalid route is given', () => {
      const initialState = reducer(undefined, {});
      const state = reducer(initialState, navigate({invalid: 'route'}));

      expect(initialState).toEqual(state);
    });
  });
});
