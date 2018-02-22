import React from 'react';
import toJson from 'enzyme-to-json';
import {BottomNav} from '../BottomNav';
import {shallow} from 'enzyme';

describe('Components', () => {
  describe('BottomNav', () => {
    const onPress = jest.fn();

    it('should renders correctly', () => {
      expect(
        toJson(
          shallow(
            <BottomNav
              onPress={onPress}
              title="Bottom Nav title"
              linkTitle="Link title"
            />,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('should call onPress when taping the icon', () => {
      const onPress = jest.fn();
      const button = shallow(
        <BottomNav onPress={onPress} title="a" linkTitle="b" />,
      );
      button.find('TouchableOpacity').prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
