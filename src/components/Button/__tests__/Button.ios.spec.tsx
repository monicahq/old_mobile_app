import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Button} from '../Button.ios';

describe('Components', () => {
  describe('Button IOS', () => {
    const defaultOnPress = {
      onPress: () => {
        return;
      },
    };

    it('should renders correctly', () => {
      expect(
        toJson(shallow(<Button {...defaultOnPress}>Test</Button>))
      ).toMatchSnapshot();
      expect(
        toJson(shallow(<Button {...defaultOnPress} title="qdwdqw" />))
      ).toMatchSnapshot();
      expect(
        toJson(
          shallow(
            <Button
              {...defaultOnPress}
              title="qdwdqw"
              loading={true}
              loadingTitle="My loading title"
            />
          )
        )
      ).toMatchSnapshot();
      expect(
        toJson(
          shallow(<Button {...defaultOnPress} title="qdwdqw" disabled={true} />)
        )
      ).toMatchSnapshot();
    });

    // TODO: uncomment this
    // it('should contain the same title than passed into parameter', () => {
    //   const button1 = shallow(<Button {...defaultOnPress} title="Test" />);
    //   expect(button1.find('Text').text()).toEqual('Test'); // eslint-disable-line

    //   const button2 = shallow(<Button {...defaultOnPress} title="Test2" />);
    //   expect(button2.find('Text').text()).toEqual('Test2'); // eslint-disable-line
    // });

    it('should call onPress when taping the button', () => {
      const onPress = jest.fn();
      const button = shallow(<Button onPress={onPress} />);
      button.find('TouchableOpacity').prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
