import React from 'react';
import {shallow} from 'enzyme';
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
      expect(shallow(<Tabbar navigation={dashboardActive} />)).toMatchSnapshot();// eslint-disable-line
      expect(shallow(<Tabbar navigation={contactsActive} />)).toMatchSnapshot();
      expect(shallow(<Tabbar navigation={loginActive} />)).toMatchSnapshot();
    });

  });
});
