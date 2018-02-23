import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {UnderConstruction} from '../UnderConstruction';

describe('Components', () => {
  describe('UnderConstruction', () => {
    it('should renders correctly', () => {
      expect(toJson(shallow(<UnderConstruction />))).toMatchSnapshot();
    });
  });
});
