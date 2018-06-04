import {Navbar} from '../index';

jest.mock('../Navbar.android', () => ({Navbar: 'android'}));
jest.mock('../Navbar.ios', () => ({Navbar: 'ios'}));

jest.mock('react-native', () => ({
  Platform: {
    OS: 'android',
  },
}));
jest.mock('react-native-vector-icons/MaterialIcons');

describe('Components', () => {
  describe('Navbar Index', () => {
    describe('android', () => {
      it('should return the android version', () => {
        expect(Navbar).toBe('android');
      });
    });
  });
});
