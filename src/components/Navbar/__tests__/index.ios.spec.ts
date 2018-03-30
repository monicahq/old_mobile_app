import {Navbar} from '../index';

jest.mock('../Navbar.android', () => ({Navbar: 'android'}));
jest.mock('../Navbar.ios', () => ({Navbar: 'ios'}));

jest.mock('react-native', () => ({
  Platform: {
    OS: 'ios',
  },
}));

describe('Components', () => {
  describe('Navbar Index', () => {
    describe('ios', () => {
      it('should return the ios version', () => {
        expect(Navbar).toBe('ios');
      });
    });
  });
});
