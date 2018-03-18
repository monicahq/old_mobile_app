import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {EmptyActivity} from '../EmptyActivity';

describe('Components', () => {
  describe('EmptyActivity', () => {
    it('should renders correctly with no subtitle', () => {
      expect(
        toJson(shallow(<EmptyActivity image={2} title="My title" />))
      ).toMatchSnapshot();
    });

    it('should renders correctly with a subtitle', () => {
      expect(
        toJson(
          shallow(
            <EmptyActivity image={2} title="My title" subtitle="My subtitle" />
          )
        )
      ).toMatchSnapshot();
    });
  });
});
