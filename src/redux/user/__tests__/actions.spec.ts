import {logout, setToken} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('User', () => {
    describe('Actions', () => {
      it('logout', () => {
        expect(logout()).toEqual({
          type: types.LOGOUT,
        });
      });

      it('setToken', () => {
        const token = 'my-token';
        expect(setToken(token)).toEqual({
          type: types.SET_TOKEN,
          payload: {
            token,
          },
        });
      });
    });
  });
});
