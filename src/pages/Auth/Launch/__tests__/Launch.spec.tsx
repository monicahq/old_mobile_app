import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Launch} from '../Launch';

const emptyFunc = () => () => {
  return;
};

describe('Components', () => {
  describe('Launch', () => {
    it('should renders correctly', () => {
      const tree = shallow(<Launch navigate={emptyFunc} />);
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
});
