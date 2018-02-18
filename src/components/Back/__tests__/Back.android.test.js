import React from 'react';
import toJson from 'enzyme-to-json';
import {Back} from '../Back.android';
import {shallow} from 'enzyme';

describe('Components', () => {
  describe('Back', () => {
    describe('Android', () => {
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
