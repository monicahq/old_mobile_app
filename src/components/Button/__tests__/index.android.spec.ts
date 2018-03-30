import {Button} from '../index';

jest.mock('../Button.android', () => ({Button: 'android'}));
jest.mock('../Button.ios', () => ({Button: 'ios'}));

jest.mock('react-native', () => ({
  Platform: {
    OS: 'android',
  },
}));

describe('Components', () => {
  describe('Button Index', () => {
    describe('android', () => {
      it('should return the android version', () => {
        expect(Button).toBe('android');
      });
    });
  });
});
