import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {NavbarIOSBack} from '../NavbarIOSBack';

describe('Components', () => {
  describe('NavbarIOSBack', () => {
    const onPress = jest.fn();
    it('should renders correctly', () => {
      expect(
        toJson(shallow(<NavbarIOSBack onPress={onPress} />))
      ).toMatchSnapshot();
    });
  });
});
