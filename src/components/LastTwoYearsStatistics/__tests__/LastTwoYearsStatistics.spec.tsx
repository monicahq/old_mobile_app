import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {LastTwoYearsStatistics} from '../LastTwoYearsStatistics';

describe('Components', () => {
  describe('LastTwoYearsStatistics', () => {
    it('should renders correctly', () => {
      expect(
        toJson(
          shallow(
            <LastTwoYearsStatistics
              title1="title1"
              title2="title2"
              count1={1}
              count2={3}
              image={3}
            />
          )
        )
      ).toMatchSnapshot();
    });
  });
});
