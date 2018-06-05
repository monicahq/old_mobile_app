import {navigate} from '@navigator/NavigationService';
import {contact1} from '@src/__mock__/contact';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {ContactInfos} from '../ContactInfos';

const navigateMock = navigate as jest.Mock;

describe('Pages', () => {
  describe('Contact / ContactInfos', () => {
    const contact = {
      first_name: 'Theo',
      last_name: 'Mathieu',
    };

    it('should renders correctly', () => {
      expect(
        toJson(shallow(<ContactInfos contact={contact1} />))
      ).toMatchSnapshot();
    });
  });
});
