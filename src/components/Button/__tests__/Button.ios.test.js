import React from 'react';
import {shallow} from 'enzyme';
import {Button} from '../Button.ios';

describe('Components', () => {
  describe('Button', () => {
    it('should renders correctly', () => {
      expect(shallow(<Button>Test</Button>)).toMatchSnapshot();
      expect(shallow(<Button text="qdwdqw" />)).toMatchSnapshot();
    });

    it('should contain the same text than passed into parameter', () => {
      const button1 = shallow(<Button text="Test" />);
      expect(button1.find('Text').children().text()).toEqual('Test'); // eslint-disable-line

      const button2 = shallow(<Button text="Test2" />);
      expect(button2.find('Text').children().text()).toEqual('Test2'); // eslint-disable-line
    });

    it('should call onPress when taping the button', () => {
      const onPress = jest.fn();
      const button = shallow(<Button onPress={onPress} />);
      button.find('TouchableOpacity').prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
