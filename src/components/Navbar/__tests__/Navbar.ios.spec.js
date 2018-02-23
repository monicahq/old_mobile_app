import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Navbar} from '../Navbar.ios';
import {View} from 'react-native';

describe('Components', () => {
  describe('Navbar IOS', () => {
    const onPress = jest.fn();

    it('should renders correctly', () => {
      expect(
        toJson(shallow(<Navbar onBack={onPress} title="My title" />)),
      ).toMatchSnapshot();

      expect(toJson(shallow(<Navbar title="My title" />))).toMatchSnapshot();
      expect(toJson(shallow(<Navbar title={<View />} />))).toMatchSnapshot();
    });
  });
});
