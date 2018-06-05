import {IAddress} from '@models';
import moment from 'moment';
import {
  getAddressLabel,
  getAge,
  getAvatarColor,
  getAvatarUrl,
  getInitials,
  getLastUpdatedDate,
  getName,
  getRelationships,
} from '../contacts';

describe('Utils', () => {
  describe('Contacts', () => {
    describe('getLastUpdatedDate', () => {
      it('should return the last_updated field of the contact', () => {
        const updatedAt = '1991-12-31';
        expect(getLastUpdatedDate({updated_at: updatedAt} as any)).toBe(
          moment(updatedAt).format('L')
        );

        const updatedAt1 = moment().toISOString();
        expect(getLastUpdatedDate({updated_at: updatedAt1} as any)).toBe(
          moment(updatedAt1).format('L')
        );
      });
    });

    describe('getName', () => {
      it('should return the full Name', () => {
        expect(getName({first_name: 'Theo', last_name: 'Mathieu'} as any)).toBe(
          'Theo Mathieu'
        );

        expect(getName({first_name: 'Theo'} as any)).toBe('Theo');
      });
    });

    describe('getAvatarUrl', () => {
      it('should work', () => {
        const url = 'test';
        const contact = {
          information: {
            avatar: {url},
          },
        };
        expect(getAvatarUrl(contact as any)).toBe(url);
      });

      it('should return undefined if the url is undefined', () => {
        const contact = {
          information: {
            avatar: {},
          },
        };
        expect(getAvatarUrl(contact as any)).toBeUndefined();
      });
    });

    describe('getAvatarColor', () => {
      it('should work', () => {
        const color = 'blue';
        const contact = {
          information: {
            avatar: {default_avatar_color: color},
          },
        };
        expect(getAvatarColor(contact as any)).toBe(color);
      });

      it('should return undefined if the default_avatar_color is undefined', () => {
        const contact = {
          information: {
            avatar: {},
          },
        };
        expect(getAvatarColor(contact as any)).toBeUndefined();
      });
    });

    describe('getRelationships', () => {
      it('should handler family, friends, love, work (in order)', () => {
        const family1 = {
          first_name: 'Theo',
        };
        const friend1 = {
          first_name: 'Daddy',
        };
        const love1 = {
          first_name: 'Louis',
        };
        const love2 = {
          first_name: 'Guillaume',
        };
        const work1 = {
          first_name: 'Guillaume from work',
        };
        const contact = {
          information: {
            relationships: {
              family: {contacts: [family1]},
              friend: {contacts: [friend1]},
              love: {contacts: [love1, love2]},
              work: {contacts: [work1]},
            },
          },
        };
        const relations = getRelationships(contact as any);
        expect(relations.length).toBe(5);
        expect(relations[0]).toEqual({...family1, type: 'Family'});
        expect(relations[1]).toEqual({...friend1, type: 'Friend'});
        expect(relations[2]).toEqual({...love1, type: 'Loved one'});
        expect(relations[3]).toEqual({...love2, type: 'Loved one'});
        expect(relations[4]).toEqual({...work1, type: 'Work'});
      });
    });

    describe('getInitials', () => {
      it('should work with a last name and a first name', () => {
        const contact: any = {
          first_name: 'Theo',
          last_name: 'Mathieu',
        };
        expect(getInitials(contact)).toBe('TM');
      });

      it('should work with only a first name', () => {
        const contact: any = {
          first_name: 'Theo',
        };
        expect(getInitials(contact)).toBe('T');
      });

      it('should work with only a last name', () => {
        const contact: any = {
          last_name: 'Mathieu',
        };
        expect(getInitials(contact)).toBe('M');
      });
    });

    describe('getAge', () => {
      it('should handle unknown birthdate', () => {
        const contact: any = {
          information: {
            dates: {
              birthdate: null,
            },
          },
        };
        expect(getAge(contact)).toBe(null);
      });

      it('should handle unknown birthdate.date', () => {
        const contact: any = {
          information: {
            dates: {
              birthdate: {date: null},
            },
          },
        };
        expect(getAge(contact)).toBe(null);
      });

      it('should handle is_year_unknown', () => {
        const contact: any = {
          information: {
            dates: {
              birthdate: {date: new Date(), is_year_unknown: true},
            },
          },
        };
        expect(getAge(contact)).toBe(null);
      });

      it('should handle a date', () => {
        const contact: any = {
          information: {
            dates: {
              birthdate: {date: new Date('1991-12-17')},
            },
          },
        };
        // Base date is Feb 14, 2017
        expect(getAge(contact)).toBe(25);
      });
    });
  });

  describe('getAddressLabel', () => {
    let address: IAddress;
    it('should return the address', () => {
      address = {
        street: 'street',
      };
      expect(getAddressLabel(address)).toBe('street');

      address = {
        street: 'street',
        postal_code: 'postal',
      };
      expect(getAddressLabel(address)).toBe('street postal');

      address = {
        street: 'street',
        postal_code: 'postal',
        city: 'city',
      };
      expect(getAddressLabel(address)).toBe('street postal city');

      address = {
        street: 'street',
        city: 'city',
      };
      expect(getAddressLabel(address)).toBe('street city');

      address = {
        city: 'city',
      };
      expect(getAddressLabel(address)).toBe('city');
    });
  });
});
