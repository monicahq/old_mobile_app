import {Back} from '../index';

jest.mock('../Back.android', () => ({Back: 'android'}));
jest.mock('../Back.ios', () => ({Back: 'ios'}));

jest.mock('react-native', () => ({
  Platform: {
    OS: 'android',
  },
}));

describe('Components', () => {
  describe('Back Index', () => {
    describe('android', () => {
      it('should return the android version', () => {
        expect(Back).toBe('android');
      });
    });
  });
});
