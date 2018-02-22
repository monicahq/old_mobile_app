import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Tabbar} from '../Tabbar';

describe('Components', () => {
  describe('Tabbar', () => {
    const dashboardActive = {
      state: {
        index: 0,
        routes: [{routeName: 'Dashboard'}],
      },
    };
    const contactsActive = {
      state: {
        index: 0,
        routes: [{routeName: 'Contacts'}],
      },
    };
    const loginActive = {
      state: {
        index: 0,
        routes: [{routeName: 'Contacts'}],
      },
    };

    it('should renders correctly', () => {
      expect(toJson(shallow(<Tabbar navigation={dashboardActive} />))).toMatchSnapshot();// eslint-disable-line
      expect(
        toJson(shallow(<Tabbar navigation={contactsActive} />)),
      ).toMatchSnapshot();
      expect(
        toJson(shallow(<Tabbar navigation={loginActive} />)),
      ).toMatchSnapshot();
    });
  });
});
