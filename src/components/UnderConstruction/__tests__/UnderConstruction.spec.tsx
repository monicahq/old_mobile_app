import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {UnderConstruction} from '../UnderConstruction';

describe('Components', () => {
  describe('UnderConstruction', () => {
    it('should renders correctly', () => {
      expect(toJson(shallow(<UnderConstruction />))).toMatchSnapshot();
    });
  });
});
