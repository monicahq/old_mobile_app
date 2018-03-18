import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {ContactAvatar} from '../ContactAvatar';

let mockNoAvatar = false;
let mockNoAvatarColor = false;

jest.mock('@utils/contacts', () => ({
  getAvatarUrl: () => (!mockNoAvatar ? 'url' : null),
  getAvatarColor: () => (!mockNoAvatarColor ? 'blue' : null),
  getInitials: () => 'TM',
}));

describe('Components', () => {
  describe('ContactAvatar', () => {
    it('should renders correctly', () => {
      expect(
        toJson(shallow(<ContactAvatar contact={{} as any} size={15} />))
      ).toMatchSnapshot();
      expect(
        toJson(shallow(<ContactAvatar contact={{} as any} size={25} />))
      ).toMatchSnapshot();

      mockNoAvatar = true;
      expect(
        toJson(shallow(<ContactAvatar contact={{} as any} size={25} />))
      ).toMatchSnapshot();

      mockNoAvatarColor = true;
      expect(
        toJson(shallow(<ContactAvatar contact={{} as any} size={25} />))
      ).toMatchSnapshot();
    });
  });
});
