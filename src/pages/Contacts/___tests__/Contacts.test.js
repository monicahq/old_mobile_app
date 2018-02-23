import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import {Contacts} from '../Contacts';

describe('Pages', () => {
  describe('Contacts', () => {
    const getContacts = jest.fn();
    const navigateToContact = jest.fn();

    it('should renders correctly without contacts and fetching', () => {
      expect(
        toJson(
          shallow(
            <Contacts
              getContacts={getContacts}
              contacts={[]}
              isFetching={true}
              navigateToContact={navigateToContact}
            />,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('should renders correctly without contacts (even in the db) and not fetching', () => {
      expect(
        toJson(
          shallow(
            <Contacts
              getContacts={getContacts}
              contacts={[]}
              count={0}
              isFetching={false}
              navigateToContact={navigateToContact}
            />,
          ),
        ),
      ).toMatchSnapshot();
    });

    const contacts = [
      {
        first_name: 'Theo',
        last_name: 'Math',
        updated_at: '1991-12-17',
      },
      {
        first_name: 'Ines',
        last_name: 'Bode',
        updated_at: '2018-02-01',
      },
    ];

    it('should renders correctly with contacts and not fetching', () => {
      expect(
        toJson(
          shallow(
            <Contacts
              getContacts={getContacts}
              contacts={contacts}
              count={2}
              isFetching={false}
              navigateToContact={navigateToContact}
            />,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('should renders correctly with contacts and fetching', () => {
      expect(
        toJson(
          shallow(
            <Contacts
              getContacts={getContacts}
              contacts={contacts}
              count={30}
              isFetching={true}
              navigateToContact={navigateToContact}
            />,
          ),
        ),
      ).toMatchSnapshot();
    });
  });
});
