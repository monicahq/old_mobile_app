import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {ContactAvatar} from '../ContactAvatar';

let mockNoAvatar = false;
let mockNoAvatarColor = false;

jest.mock('utils/contacts', () => ({
  getAvatarUrl: () => (!mockNoAvatar ? 'url' : null),
  getAvatarColor: () => (!mockNoAvatarColor ? 'blue' : null),
  getInitials: () => 'TM',
}));

describe('Components', () => {
  describe('ContactAvatar', () => {
    it('should renders correctly', () => {
      expect(
        toJson(shallow(<ContactAvatar contact={{}} size={15} />)),
      ).toMatchSnapshot();
      expect(
        toJson(shallow(<ContactAvatar contact={{}} size={25} />)),
      ).toMatchSnapshot();

      mockNoAvatar = true;
      expect(
        toJson(shallow(<ContactAvatar contact={{}} size={25} />)),
      ).toMatchSnapshot();

      mockNoAvatarColor = true;
      expect(
        toJson(shallow(<ContactAvatar contact={{}} size={25} />)),
      ).toMatchSnapshot();
    });
  });
});
