import {navigate} from '@navigator/NavigationService';
import {contact1} from '@src/__mock__/contact';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Contact} from '../Contact';

const navigateMock = navigate as jest.Mock;

describe('Pages', () => {
  describe('Contact / Contact', () => {
    const contact = {
      address: {
        street: 'test',
      },
    };

    it('should renders correctly', () => {
      expect(toJson(shallow(<Contact contact={contact1} />))).toMatchSnapshot();
    });
  });
});
