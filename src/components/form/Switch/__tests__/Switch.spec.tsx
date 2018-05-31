import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Switch} from '../Switch';

describe('Components', () => {
  describe('Switch', () => {
    it('ios should renders correctly', () => {
      expect(toJson(shallow(<Switch title="My title" />))).toMatchSnapshot();
      expect(
        toJson(shallow(<Switch title="My title" touched={true} />))
      ).toMatchSnapshot();

      expect(
        toJson(
          shallow(<Switch title="My title" touched={true} error="my-error" />)
        )
      ).toMatchSnapshot();

      expect(
        toJson(shallow(<Switch title="My title" error="My errors" />))
      ).toMatchSnapshot();
    });

    it('android should renders correctly', () => {
      jest.mock('Platform', () => ({
        OS: 'android',
      }));

      expect(toJson(shallow(<Switch title="My title" />))).toMatchSnapshot();
      expect(
        toJson(shallow(<Switch title="My title" touched={true} />))
      ).toMatchSnapshot();
    });
  });
});
