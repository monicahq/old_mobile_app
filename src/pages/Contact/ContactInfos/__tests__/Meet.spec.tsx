import {contact1} from '@src/__mock__/contact';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Meet} from '../Meet';

describe('Pages', () => {
  describe('Contact / Meet', () => {
    it('should renders correctly', () => {
      expect(toJson(shallow(<Meet contact={contact1} />))).toMatchSnapshot();
    });
  });
});
