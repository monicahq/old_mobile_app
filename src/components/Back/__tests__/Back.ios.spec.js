import React from 'react';
import toJson from 'enzyme-to-json';
import {Back} from '../Back.ios';
import {shallow} from 'enzyme';

describe('Components', () => {
  describe('Back', () => {
    describe('IOS', () => {
      const onPress = jest.fn();

      it('should renders correctly', () => {
        expect(toJson(shallow(<Back onPress={onPress} />))).toMatchSnapshot();
      });

      it('should call onPress when taping the icon', () => {
        const onPress = jest.fn();
        const button = shallow(<Back onPress={onPress} />);
        button.prop('onPress')();
        expect(onPress).toHaveBeenCalledTimes(1);
        expect(onPress).toHaveBeenCalledWith();
      });
    });
  });
});
