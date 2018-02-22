import {AsyncStorage} from 'react-native';
import {subscribeBeta} from '../operations';
import {subscribeBeta as s} from '../actions';

import {betaKey} from 'storage-keys';

jest.mock('react-native', () => ({
  AsyncStorage: {
    setItem: jest.fn(),
    removeItem: jest.fn(),
  },
}));

describe('Redux', () => {
  describe('Beta', () => {
    describe('Operations', () => {
      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should return the same thing as actions.subscribeBeta', () => {
        expect(subscribeBeta()).toEqual(s());
        expect(subscribeBeta(true)).toEqual(s(true));
        expect(subscribeBeta(false)).toEqual(s(false));
      });

      it('should set localstorage if parameter is true', () => {
        subscribeBeta(true);

        expect(AsyncStorage.setItem.mock.calls.length).toEqual(1);
        expect(AsyncStorage.setItem.mock.calls[0]).toEqual([betaKey, 'true']);

        expect(AsyncStorage.removeItem.mock.calls.length).toEqual(0);
      });

      it('should remove localstorage item if parameter is false', () => {
        subscribeBeta(false);

        expect(AsyncStorage.removeItem.mock.calls.length).toEqual(1);
        expect(AsyncStorage.removeItem.mock.calls[0]).toEqual([betaKey]);

        expect(AsyncStorage.setItem.mock.calls.length).toEqual(0);
      });
    });
  });
});
