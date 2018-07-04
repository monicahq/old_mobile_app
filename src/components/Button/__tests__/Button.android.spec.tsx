import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Button} from '../Button.android';

describe('Components', () => {
  describe('Button Android', () => {
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
            <Button {...defaultOnPress} loading={true} loadingTitle="qdwdqw" />
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
    // it('should contain the title uppercased passed into parameter', () => {
    //   const button1 = shallow(<Button {...defaultOnPress} title="Test" />);
    //   expect(button1.find('Text').text()).toEqual('TEST'); // eslint-disable-line

    //   const button2 = shallow(<Button {...defaultOnPress} title="Test2" />);
    //   expect(button2.find('Text').text()).toEqual('TEST2'); // eslint-disable-line
    // });

    it('should call onPress when taping the button', () => {
      const onPress = jest.fn();
      const button = shallow(<Button onPress={onPress} />);
      button.prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
