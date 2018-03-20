import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {ContactListItem} from '../ContactListItem';

jest.mock('@utils/contacts', () => ({
  getLastUpdatedDate: () => 'testDate',
}));

describe('Components', () => {
  describe('ContactListItem', () => {
    it('should renders correctly', () => {
      const onPress1 = jest.fn();
      const onPress2 = jest.fn();
      expect(
        toJson(
          shallow(<ContactListItem contact={{} as any} onPress={onPress1} />)
        )
      ).toMatchSnapshot();

      expect(
        toJson(
          shallow(
            <ContactListItem
              contact={{} as any}
              onPress={onPress2}
              bgOddRow={true}
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('should call onPress when taping the list row', () => {
      const onPress = jest.fn();
      const button = shallow(
        <ContactListItem contact={{} as any} onPress={onPress} />
      );
      button.prop('onPress')();
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalledWith();
    });
  });
});
