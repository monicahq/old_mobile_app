import {Back} from '../index';

jest.mock('../Back.android', () => ({Back: 'android'}));
jest.mock('../Back.ios', () => ({Back: 'ios'}));

jest.mock('react-native', () => ({
  Platform: {
    OS: 'ios',
  },
}));

describe('Components', () => {
  describe('Back Index', () => {
    describe('ios', () => {
      it('should return the ios version', () => {
        expect(Back).toBe('ios');
      });
    });
  });
});
