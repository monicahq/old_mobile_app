import {Checkbox} from '../index';

jest.mock('../Checkbox.android', () => ({Checkbox: 'android'}));
jest.mock('../Checkbox.ios', () => ({Checkbox: 'ios'}));

jest.mock('react-native', () => ({
  Platform: {
    OS: 'ios',
  },
}));

describe('Components', () => {
  describe('Checkbox Index', () => {
    describe('ios', () => {
      it('should return the ios version', () => {
        expect(Checkbox).toBe('ios');
      });
    });
  });
});
