import {back, navigate, goToLaunchScreen, setState} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Router', () => {
    describe('Actions', () => {
      it('back', () => {
        expect(back()).toEqual({
          type: types.BACK,
        });
      });

      it('navigate', () => {
        const routeName = 'ROUTE';

        expect(navigate(routeName)).toEqual({
          type: types.NAVIGATE,
          routeName,
        });
      });

      it('goToLaunchScreen', () => {
        expect(goToLaunchScreen()).toEqual({
          type: types.GO_TO_LAUNCH_SCREEN,
        });
      });

      it('goToLaunchScreen', () => {
        const state = {routeName: 'test'};
        expect(setState(state)).toEqual({
          type: types.SET_STATE,
          state,
        });
      });
    });
  });
});
