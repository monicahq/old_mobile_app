import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Back} from '../Back.ios';

describe('Components', () => {
  describe('Back', () => {
    describe('IOS', () => {
      it('should renders correctly', () => {
        const onPress = jest.fn();
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
