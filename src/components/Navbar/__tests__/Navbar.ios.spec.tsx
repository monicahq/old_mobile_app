import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {View} from 'react-native';
import {Navbar} from '../Navbar.ios';

describe('Components', () => {
  describe('Navbar IOS', () => {
    const onPress = jest.fn();

    it('should renders correctly', () => {
      expect(
        toJson(shallow(<Navbar onBack={onPress} title="My title" />))
      ).toMatchSnapshot();

      expect(toJson(shallow(<Navbar title="My title" />))).toMatchSnapshot();
      expect(toJson(shallow(<Navbar title={<View />} />))).toMatchSnapshot();
    });
  });
});
