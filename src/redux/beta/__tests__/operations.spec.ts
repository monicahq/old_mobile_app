import {AsyncStorage} from 'react-native';
import {subscribeBeta as s} from '../actions';
import {subscribeBeta} from '../operations';

import {betaKey} from '@src/storage-keys';

jest.mock('react-native', () => ({
  AsyncStorage: {
    setItem: jest.fn(),
    removeItem: jest.fn(),
  },
}));

const setItem = AsyncStorage.setItem as jest.Mock<{}>;
const removeItem = AsyncStorage.removeItem as jest.Mock<{}>;

describe('Redux', () => {
  describe('Beta', () => {
    describe('Operations', () => {
      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should return the same thing as actions.subscribeBeta', () => {
        expect(subscribeBeta(true)).toEqual(s(true));
        expect(subscribeBeta(false)).toEqual(s(false));
      });

      it('should set localstorage if parameter is true', () => {
        subscribeBeta(true);

        expect(setItem.mock.calls.length).toEqual(1);
        expect(setItem.mock.calls[0]).toEqual([betaKey, 'true']);

        expect(removeItem.mock.calls.length).toEqual(0);
      });

      it('should remove localstorage item if parameter is false', () => {
        subscribeBeta(false);

        expect(removeItem.mock.calls.length).toEqual(1);
        expect(removeItem.mock.calls[0]).toEqual([betaKey]);

        expect(setItem.mock.calls.length).toEqual(0);
      });
    });
  });
});
