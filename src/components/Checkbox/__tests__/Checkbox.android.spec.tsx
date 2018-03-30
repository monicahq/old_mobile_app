import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Checkbox} from '../Checkbox.android';

describe('Components', () => {
  describe('Checkbox Android', () => {
    // const defaultOnPress = {
    //   onPress: () => {
    //     return;
    //   },
    // };

    it('should renders correctly', () => {
      expect(toJson(shallow(<Checkbox checked={true} />))).toMatchSnapshot();
      expect(toJson(shallow(<Checkbox checked={false} />))).toMatchSnapshot();
    });
  });
});
