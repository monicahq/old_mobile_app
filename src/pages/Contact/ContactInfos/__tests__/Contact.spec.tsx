import {contact1} from '@src/__mock__/contact';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Contact} from '../Contact';

describe('Pages', () => {
  describe('Contact / Contact', () => {
    it('should renders correctly', () => {
      expect(toJson(shallow(<Contact contact={contact1} />))).toMatchSnapshot();
    });
  });
});
