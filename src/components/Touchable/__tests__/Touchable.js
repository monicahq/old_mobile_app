import React from 'react';
import {View} from 'react-native';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Touchable} from '../Touchable';

describe('Components', () => {
  describe('Touchable', () => {
    const onPress = jest.fn();

    it('ios should renders correctly', () => {
      expect(
        toJson(
          shallow(
            <Touchable onPress={onPress}>
              <View />
              <View />
            </Touchable>,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('android should renders correctly', () => {
      jest.mock('Platform', () => ({
        OS: 'android',
      }));

      expect(
        toJson(
          shallow(
            <Touchable onPress={onPress}>
              <View />
            </Touchable>,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('should call onPress when taping the list row', () => {
      const onPress = jest.fn();
      const button = shallow(
        <Touchable onPress={onPress}>
          <View />
        </Touchable>,
      );
      button.prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
