import {back, goToLaunchScreen, navigate, setState} from '../actions';
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

      it('setState', () => {
        const state = {index: 0, routes: []};
        expect(setState(state)).toEqual({
          type: types.SET_STATE,
          state,
        });
      });
    });
  });
});
