import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {ContactListItem} from '../ContactListItem';

jest.mock('utils/contacts', () => ({
  getLastUpdatedDate: () => 'testDate',
}));

describe('Components', () => {
  describe('ContactListItem', () => {
    const onPress = jest.fn();

    it('should renders correctly', () => {
      expect(
        toJson(shallow(<ContactListItem contact={{}} onPress={onPress} />)),
      ).toMatchSnapshot();

      expect(
        toJson(
          shallow(
            <ContactListItem contact={{}} onPress={onPress} bgOddRow={true} />,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('should call onPress when taping the list row', () => {
      const onPress = jest.fn();
      const button = shallow(
        <ContactListItem contact={{}} onPress={onPress} />,
      );
      button.prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
