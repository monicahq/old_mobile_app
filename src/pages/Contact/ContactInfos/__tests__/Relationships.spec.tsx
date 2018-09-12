import {contact1} from '@src/__mock__/contact';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Relationships} from '../Relationships';

describe('Pages', () => {
  describe('Contact / Relationships', () => {
    it('should renders correctly', () => {
      expect(
        toJson(shallow(<Relationships contact={contact1} />))
      ).toMatchSnapshot();
    });
  });
});
