import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Settings} from '../Settings';

describe('Pages', () => {
  describe('Settings', () => {
    it('ios should renders correctly', () => {
      const logout = jest.fn();
      const goToLaunchScreen = jest.fn();
      const subscribeBeta = jest.fn();

      expect(
        toJson(
          shallow(
            <Settings
              logout={logout}
              goToLaunchScreen={goToLaunchScreen}
              subscribeBeta={subscribeBeta}
              beta={true}
            />
          )
        )
      ).toMatchSnapshot();

      expect(
        toJson(
          shallow(
            <Settings
              logout={logout}
              goToLaunchScreen={goToLaunchScreen}
              subscribeBeta={subscribeBeta}
              beta={false}
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('android should renders correctly', () => {
      const logout = jest.fn();
      const goToLaunchScreen = jest.fn();
      const subscribeBeta = jest.fn();

      jest.mock('Platform', () => ({
        OS: 'android',
      }));

      expect(
        toJson(
          shallow(
            <Settings
              logout={logout}
              goToLaunchScreen={goToLaunchScreen}
              subscribeBeta={subscribeBeta}
              beta={true}
            />
          )
        )
      ).toMatchSnapshot();

      expect(
        toJson(
          shallow(
            <Settings
              logout={logout}
              goToLaunchScreen={goToLaunchScreen}
              subscribeBeta={subscribeBeta}
              beta={false}
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('logout should call logout and go to launch screen', () => {
      const logout = jest.fn();
      const goToLaunchScreen = jest.fn();
      const subscribeBeta = jest.fn();

      const tree = shallow(
        <Settings
          logout={logout}
          goToLaunchScreen={goToLaunchScreen}
          subscribeBeta={subscribeBeta}
          beta={true}
        />
      );

      tree.instance().logout();
      expect(logout.mock.calls.length).toBe(1);
      expect(logout.mock.calls[0]).toEqual([]);
      expect(goToLaunchScreen.mock.calls.length).toBe(1);
      expect(goToLaunchScreen.mock.calls[0]).toEqual([]);
    });
  });
});
