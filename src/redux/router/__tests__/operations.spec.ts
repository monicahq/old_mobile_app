import {StatusBar} from 'react-native';
import {
  back as b,
  goToLaunchScreen as g,
  navigate as n,
  setState as s,
} from '../actions';
import {back, goToLaunchScreen, navigate, setState} from '../operations';

jest.mock('react-native', () => ({
  StatusBar: {
    setBarStyle: jest.fn(),
  },
}));

const setBarStyle = StatusBar.setBarStyle as jest.Mock<{}>;

describe('Redux', () => {
  describe('Router', () => {
    describe('Operations', () => {
      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should return the same thing as actions.back', () => {
        expect(back()).toEqual(b());
      });

      it('should return the same thing as actions.navigate', () => {
        const routeName = 'MY_ROUTE';
        expect(navigate(routeName)).toEqual(n(routeName));
      });

      it('should return the same thing as actions.goToLaunchScreen', () => {
        expect(goToLaunchScreen()).toEqual(g());
      });

      it(`goToLaunchScreen should call StatusBar.setBarStyle('default')`, () => {
        goToLaunchScreen();
        expect(setBarStyle.mock.calls.length).toBe(1);
        expect(setBarStyle.mock.calls[0]).toEqual(['default']);
      });

      it('should return the same thing as actions.setState', () => {
        const state = {index: 0, routes: []};
        expect(setState(state)).toEqual(s(state));
      });
    });
  });
});
