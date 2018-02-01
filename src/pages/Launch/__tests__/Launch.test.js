import React from 'react';
import {shallow} from 'enzyme';
import {Launch} from '../Launch';

const emptyFunc = () => () => {};

describe('Components', () => {
  describe('Launch', () => {
    it('should renders correctly', () => {
      const tree = shallow(<Launch navigate={emptyFunc} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
