import {
  getRemindersByContactFailed,
  getRemindersByContactFetched,
  getRemindersByContactSuccess,
} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Reminders', () => {
    describe('Actions', () => {
      it('getRemindersByContactFetched', () => {
        expect(getRemindersByContactFetched(4)).toEqual({
          type: types.GET_REMINDERS_BY_CONTACT_FETCHED,
          payload: {contactId: 4},
        });
      });

      it('getRemindersByContactSuccess', () => {
        const contactId = 5;
        const reminders = ['item2', 'item1'];
        expect(
          getRemindersByContactSuccess(contactId, reminders as any)
        ).toEqual({
          type: types.GET_REMINDERS_BY_CONTACT_SUCCESS,
          payload: {
            reminders,
            contactId,
          },
        });
      });

      it('getRemindersByContactFailed', () => {
        const error = new Error('My error');
        expect(getRemindersByContactFailed(error)).toEqual({
          type: types.GET_REMINDERS_BY_CONTACT_FAILED,
          payload: {error},
        });
      });
    });
  });
});
