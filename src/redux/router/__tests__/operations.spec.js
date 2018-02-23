import {StatusBar} from 'react-native';
import {navigate, back, goToLaunchScreen, setState} from '../operations';
import {
  navigate as n,
  back as b,
  goToLaunchScreen as g,
  setState as s,
} from '../actions';

jest.mock('react-native', () => ({
  StatusBar: {
    setBarStyle: jest.fn(),
  },
}));

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
        expect(navigate()).toEqual(n());
      });

      it('should return the same thing as actions.goToLaunchScreen', () => {
        expect(goToLaunchScreen()).toEqual(g());
      });

      it(`goToLaunchScreen should call StatusBar.setBarStyle('default')`, () => {
        goToLaunchScreen();
        expect(StatusBar.setBarStyle.mock.calls.length).toBe(1);
        expect(StatusBar.setBarStyle.mock.calls[0]).toEqual(['default']);
      });

      it('should return the same thing as actions.setState', () => {
        const state = {test: 'state'};
        expect(setState(state)).toEqual(s(state));
      });
    });
  });
});
