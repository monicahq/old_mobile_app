import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {BottomNav} from '../BottomNav';

describe('Components', () => {
  describe('BottomNav', () => {
    it('should renders correctly', () => {
      const onPress = jest.fn();
      expect(
        toJson(
          shallow(
            <BottomNav
              onPress={onPress}
              title="Bottom Nav title"
              linkTitle="Link title"
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('should call onPress when taping the icon', () => {
      const onPress = jest.fn();
      const button = shallow(
        <BottomNav onPress={onPress} title="a" linkTitle="b" />
      );
      button.find('TouchableOpacity').prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
