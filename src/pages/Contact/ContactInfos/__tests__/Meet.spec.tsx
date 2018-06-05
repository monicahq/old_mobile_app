import {navigate} from '@navigator/NavigationService';
import {contact1} from '@src/__mock__/contact';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Meet} from '../Meet';

const navigateMock = navigate as jest.Mock;

describe('Pages', () => {
  describe('Contact / Meet', () => {
    const contact = {
      first_name: 'Theo',
      last_name: 'Mathieu',
    };

    it('should renders correctly', () => {
      expect(toJson(shallow(<Meet contact={contact1} />))).toMatchSnapshot();
    });
  });
});
