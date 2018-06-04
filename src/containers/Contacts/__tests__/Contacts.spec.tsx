import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Contacts} from '../Contacts';

describe('Pages', () => {
  describe('Contacts', () => {
    const getContacts = jest.fn();
    const searchContacts = jest.fn();
    const onPress = jest.fn();

    it('should not have a componentWillReceiveProps method', () => {
      const tree = shallow(
        <Contacts
          getContacts={getContacts}
          searchContacts={searchContacts}
          contacts={[]}
          isFetching={true}
          isSearching={false}
          onPress={onPress}
          count={0}
        />
      );
      expect(tree.instance().componentWillReceiveProps).toBeUndefined();
    });

    it('should renders correctly without contacts and fetching', () => {
      expect(
        toJson(
          shallow(
            <Contacts
              getContacts={getContacts}
              searchContacts={searchContacts}
              contacts={[]}
              isFetching={true}
              isSearching={false}
              onPress={onPress}
              count={0}
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('should renders correctly without contacts (even in the db) and not fetching', () => {
      expect(
        toJson(
          shallow(
            <Contacts
              getContacts={getContacts}
              searchContacts={searchContacts}
              contacts={[]}
              count={0}
              isFetching={false}
              isSearching={false}
              onPress={onPress}
            />
          )
        )
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
              searchContacts={searchContacts}
              contacts={contacts as any}
              count={2}
              isFetching={false}
              isSearching={false}
              onPress={onPress}
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('should renders correctly with contacts and fetching', () => {
      expect(
        toJson(
          shallow(
            <Contacts
              getContacts={getContacts}
              searchContacts={searchContacts}
              contacts={contacts as any}
              count={30}
              isFetching={true}
              isSearching={false}
              onPress={onPress}
            />
          )
        )
      ).toMatchSnapshot();
    });
  });
});
