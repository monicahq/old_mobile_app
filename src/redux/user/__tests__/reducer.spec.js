import {tokenReducer, userReducer} from '../reducer';
import {logout, setToken} from '../actions';

describe('Redux', () => {
  describe('User', () => {
    describe('Token Reducer', () => {
      it('should return the initial state', () => {
        expect(tokenReducer(undefined, {})).toBe(null);
      });

      it('should handle setToken action', () => {
        const token = 'my-token';
        expect(tokenReducer(undefined, setToken(token))).toBe(token);
      });

      it('should handle logout action', () => {
        const token = 'my-token';
        expect(tokenReducer(token, logout())).toBe(null);
      });
    });

    describe('User Reducer', () => {
      it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toBe(null);
      });
    });
  });
});
