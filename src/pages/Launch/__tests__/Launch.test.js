import React from 'react';
import {shallow} from 'enzyme';
import {Launch} from '../Launch';

const emptyFunc = () => {};

describe('Components', () => {
  describe('Launch', () => {
    it('should renders correctly', () => {
      const tree = shallow(
        <Launch navigateLogin={emptyFunc} navigateSignup={emptyFunc} />,
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
