import {Button} from '../index';

jest.mock('../Button.android', () => ({Button: 'android'}));
jest.mock('../Button.ios', () => ({Button: 'ios'}));

jest.mock('react-native', () => ({
  Platform: {
    OS: 'ios',
  },
}));

describe('Components', () => {
  describe('Button Index', () => {
    describe('ios', () => {
      it('should return the ios version', () => {
        expect(Button).toBe('ios');
      });
    });
  });
});
