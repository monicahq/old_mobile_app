import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Tabbar} from '../Tabbar';

jest.mock('Platform', () => ({
  OS: 'android',
  select: () => null,
}));

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
      expect(
        toJson(shallow(<Tabbar navigation={dashboardActive as any} />))
      ).toMatchSnapshot(); // eslint-disable-line
      expect(
        toJson(shallow(<Tabbar navigation={contactsActive as any} />))
      ).toMatchSnapshot();
      expect(
        toJson(shallow(<Tabbar navigation={loginActive as any} />))
      ).toMatchSnapshot();
    });
  });
});
