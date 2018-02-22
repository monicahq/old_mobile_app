import {getAvatarColor, getAvatarUrl, getLastUpdatedDate} from '../contacts';
import moment from 'moment';

describe('Utils', () => {
  describe('Contacts', () => {
    describe('getLastUpdatedDate', () => {
      it('should return the last_updated field of the contact', () => {
        const updatedAt = '1991-12-31';
        expect(getLastUpdatedDate({updated_at: updatedAt})).toBe(
          moment(updatedAt).format('L'),
        );

        const updatedAt1 = moment().toISOString();
        expect(getLastUpdatedDate({updated_at: updatedAt1})).toBe(
          moment(updatedAt1).format('L'),
        );
      });
    });

    describe('getAvatarUrl', () => {
      const url = 'test';
      const contact = {
        information: {
          avatar: {url},
        },
      };
      expect(getAvatarUrl(contact)).toBe(url);
    });

    describe('getAvatarColor', () => {
      const color = 'blue';
      const contact = {
        information: {
          avatar: {default_avatar_color: color},
        },
      };
      expect(getAvatarColor(contact)).toBe(color);
    });
  });
});
