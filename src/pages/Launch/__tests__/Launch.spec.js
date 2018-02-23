import React from 'react';
import {shallow} from 'enzyme';
import {Launch} from '../Launch';
import toJson from 'enzyme-to-json';

const emptyFunc = () => () => {};

describe('Components', () => {
  describe('Launch', () => {
    it('should renders correctly', () => {
      const tree = shallow(<Launch navigate={emptyFunc} />);
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
});
