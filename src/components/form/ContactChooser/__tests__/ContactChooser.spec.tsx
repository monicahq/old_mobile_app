import {navigate} from '@navigator/NavigationService';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {ContactChooser} from '../ContactChooser';

jest.mock('@navigator/NavigationService', () => ({
  navigate: jest.fn(),
}));

const navigateMock = navigate as jest.Mock;

describe('Components', () => {
  describe('ContactChooser', () => {
    const onValueChange = jest.fn();
    const contact = {first_name: 'plouf', last_name: 'nathie'};

    it('should renders correctly', () => {
      expect(
        toJson(
          shallow(
            <ContactChooser
              onValueChange={onValueChange}
              value={contact as any}
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('should renders without contact', () => {
      expect(
        toJson(
          shallow(<ContactChooser onValueChange={onValueChange} value={null} />)
        )
      ).toMatchSnapshot();
    });

    it('should renders with an error', () => {
      expect(
        toJson(
          shallow(
            <ContactChooser
              onValueChange={onValueChange}
              value={null}
              touched={true}
              error="dqwdqw"
            />
          )
        )
      ).toMatchSnapshot();
    });

    it('should navigate to ChooseContacts', () => {
      const tree = shallow(
        <ContactChooser onValueChange={onValueChange} value={null} />
      );
      tree.instance().returnData = 'a';
      tree.instance().navigate();
      expect(navigateMock.mock.calls[0]).toEqual([
        'ChooseContacts',
        {returnData: 'a'},
      ]);
    });

    it('returnData should call callback', () => {
      const tree = shallow(
        <ContactChooser onValueChange={onValueChange} value={null} />
      );
      tree.instance().returnData('a');
      expect(onValueChange.mock.calls).toEqual([['a']]);
    });
  });
});
