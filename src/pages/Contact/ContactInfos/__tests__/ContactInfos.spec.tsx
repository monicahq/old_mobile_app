import {contact1} from '@src/__mock__/contact';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {ContactInfos} from '../ContactInfos';

describe('Pages', () => {
  describe('Contact / ContactInfos', () => {
    it('should renders correctly', () => {
      expect(
        toJson(shallow(<ContactInfos contact={contact1} />))
      ).toMatchSnapshot();
    });
  });
});
