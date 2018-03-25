import moment from 'moment';
import {
  getAge,
  getAvatarColor,
  getAvatarUrl,
  getFamily,
  getInitials,
  getLastUpdatedDate,
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
    });

    describe('getFamily', () => {
      it('should handler partners, kids, progenitors (in order)', () => {
        const kid1 = {
          first_name: 'Theo',
        };
        const prog1 = {
          first_name: 'Daddy',
        };
        const partner1 = {
          first_name: 'Louis',
        };
        const partner2 = {
          first_name: 'Guillaume',
        };
        const contact = {
          information: {
            family: {
              kids: {kids: [kid1]},
              progenitors: {progenitors: [prog1]},
              partners: {partners: [partner1, partner2]},
            },
          },
        };
        const family = getFamily(contact as any);
        expect(family.length).toBe(4);
        expect(family[0]).toEqual({...partner1, type: 'Partner'});
        expect(family[1]).toEqual({...partner2, type: 'Partner'});
        expect(family[2]).toEqual({...kid1, type: 'Kid'});
        expect(family[3]).toEqual({...prog1, type: 'Progenitor'});
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
});
