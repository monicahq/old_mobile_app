import {AsyncStorage} from 'react-native';

import {API} from '@api';
import {logout as l, setToken as s} from '../actions';
import {logout, setToken} from '../operations';

import {tokenKey} from '@src/storage-keys';

jest.mock('react-native', () => ({
  AsyncStorage: {
    setItem: jest.fn(),
    removeItem: jest.fn(),
    getItem: () => Promise.resolve(),
  },
}));

jest.mock('@api', () => ({
  API: {
    setToken: jest.fn(),
  },
}));

const setItem = AsyncStorage.setItem as jest.Mock<{}>;
const removeItem = AsyncStorage.removeItem as jest.Mock<{}>;
const APIsetToken = API.setToken as jest.Mock<{}>;

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

        expect(setItem.mock.calls.length).toEqual(1);
        expect(setItem.mock.calls[0]).toEqual([tokenKey, token]);

        expect(removeItem.mock.calls.length).toEqual(0);
      });

      it('should remove localstorage item if logout is called', () => {
        logout();

        expect(removeItem.mock.calls.length).toEqual(1);
        expect(removeItem.mock.calls[0]).toEqual([tokenKey]);

        expect(setItem.mock.calls.length).toEqual(0);
      });

      it('should call API.setToken if setToken is called', () => {
        const token = 'test-token';
        setToken(token);

        expect(APIsetToken.mock.calls.length).toEqual(1);
        expect(APIsetToken.mock.calls[0]).toEqual([token]);
      });

      it('should call API.setToken if logout is called', () => {
        logout();

        expect(APIsetToken.mock.calls.length).toEqual(1);
        expect(APIsetToken.mock.calls[0]).toEqual([null]);
      });
    });
  });
});
