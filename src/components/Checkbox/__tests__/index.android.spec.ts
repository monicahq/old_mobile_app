import {Checkbox} from '../index';

jest.mock('../Checkbox.android', () => ({Checkbox: 'android'}));
jest.mock('../Checkbox.ios', () => ({Checkbox: 'ios'}));

jest.mock('react-native', () => ({
  Platform: {
    OS: 'android',
  },
}));

describe('Components', () => {
  describe('Checkbox Index', () => {
    describe('android', () => {
      it('should return the android version', () => {
        expect(Checkbox).toBe('android');
      });
    });
  });
});
