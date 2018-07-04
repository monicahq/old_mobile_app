import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Navbar} from '../Navbar.ios';

jest.mock('@navigator/NavigationService', () => ({
  navigate: jest.fn(),
}));

describe('Components', () => {
  describe('Navbar Contacts IOS', () => {
    const onSearchTextChanged = jest.fn();
    // const contact = {first_name: 'plouf', last_name: 'nathie'};

    it('should renders correctly', () => {
      expect(
        toJson(shallow(<Navbar onSearchTextChanged={onSearchTextChanged} />))
      ).toMatchSnapshot();
    });

    it('should renders correctly with onBack', () => {
      expect(
        toJson(
          shallow(
            <Navbar
              onSearchTextChanged={onSearchTextChanged}
              onBack={jest.fn()}
            />
          )
        )
      ).toMatchSnapshot();
    });
  });
});
