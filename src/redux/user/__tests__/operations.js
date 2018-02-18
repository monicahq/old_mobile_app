import {AsyncStorage} from 'react-native';
import {API} from 'api';
import {logout, setToken} from '../operations';
import {logout as l, setToken as s} from '../actions';

import {tokenKey} from 'storage-keys';

jest.mock('react-native', () => ({
  AsyncStorage: {
    setItem: jest.fn(),
    removeItem: jest.fn(),
    getItem: () => Promise.resolve(),
  },
}));

jest.mock('api', () => ({
  API: {
    setToken: jest.fn(),
  },
}));

describe('Redux', () => {
  describe('User', () => {
    describe('Operations', () => {
      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should return the same thing as actions.setToken', () => {
        const token = 'test-token';
        expect(setToken(token)).toEqual(s(token));
      });

      it('should return the same thing as actions.logout', () => {
        expect(logout()).toEqual(l());
      });

      it('should set localstorage if setToken is called', () => {
        const token = 'test-token';
        setToken(token);

        expect(AsyncStorage.setItem.mock.calls.length).toEqual(1);
        expect(AsyncStorage.setItem.mock.calls[0]).toEqual([tokenKey, token]);

        expect(AsyncStorage.removeItem.mock.calls.length).toEqual(0);
      });

      it('should remove localstorage item if logout is called', () => {
        logout();

        expect(AsyncStorage.removeItem.mock.calls.length).toEqual(1);
        expect(AsyncStorage.removeItem.mock.calls[0]).toEqual([tokenKey]);

        expect(AsyncStorage.setItem.mock.calls.length).toEqual(0);
      });

      it('should call API.setToken if setToken is called', () => {
        const token = 'test-token';
        setToken(token);

        expect(API.setToken.mock.calls.length).toEqual(1);
        expect(API.setToken.mock.calls[0]).toEqual([token]);
      });

      it('should call API.setToken if logout is called', () => {
        logout();

        expect(API.setToken.mock.calls.length).toEqual(1);
        expect(API.setToken.mock.calls[0]).toEqual([null]);
      });
    });
  });
});
