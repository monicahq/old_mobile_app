import {logout, setToken} from '../actions';
import {tokenReducer} from '../reducer';

describe('Redux', () => {
  describe('User', () => {
    describe('Token Reducer', () => {
      it('should return the initial state', () => {
        expect(tokenReducer(undefined, {} as any)).toBe(null);
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
  });
});
