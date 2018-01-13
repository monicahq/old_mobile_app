import React from 'react';
import {shallow} from 'enzyme';
import {Launch} from '../Launch';

describe('Components', () => {
  describe('Launch', () => {
    it('should renders correctly', () => {
      const tree = shallow(<Launch />);
      expect(tree).toMatchSnapshot();
    });
  });
});
