import {getRemindersByContact} from '../operations';
import {
  getRemindersByContactFailed,
  getRemindersByContactFetched,
  getRemindersByContactSuccess,
} from '../actions';
import {API} from 'api';

jest.mock('api', () => ({
  API: {
    Reminders: {
      getAllByContact: jest.fn(),
    },
  },
}));

describe('Redux', () => {
  describe('REMINDERS', () => {
    describe('Operations', () => {
      let dispatch;
      const contactId = 5;

      beforeEach(() => {
        dispatch = jest.fn();
        API.Reminders.getAllByContact.mockReset();
      });

      describe('getRemindersByContact', () => {
        it('should not do anything if it is already fetching', async () => {
          const getState = () => ({
            getRemindersByContact: {
              isFetching: true,
            },
          });
          await getRemindersByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
        });

        it('should not do anything if every element has already been fetched', async () => {
          const getState = () => ({
            contacts: {
              [contactId]: {
                statistics: {
                  number_of_reminders: 5,
                },
                reminders: [1, 2, 3, 4, 5],
              },
            },
            getRemindersByContact: {
              isFetching: false,
            },
          });
          await getRemindersByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          expect(API.Reminders.getAllByContact.mock.calls.length).toBe(0);
        });

        it('should trigger fetch action (success)', async () => {
          const res = {
            data: ['a'],
          };
          const fetchedPageCount = 3;
          const getState = () => ({
            contacts: {
              [contactId]: {},
            },
            getRemindersByContact: {
              isFetching: false,
              fetchedPageCount,
            },
          });
          API.Reminders.getAllByContact.mockReturnValue(Promise.resolve(res));
          await getRemindersByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getRemindersByContactFetched(),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getRemindersByContactSuccess(contactId, res.data),
          ]);
          expect(API.Reminders.getAllByContact.mock.calls.length).toBe(1);
          expect(API.Reminders.getAllByContact.mock.calls[0]).toEqual([
            contactId,
            fetchedPageCount + 1,
          ]);
        });

        it('should trigger fetch action (failed)', async () => {
          const error = new Error();
          const fetchedPageCount = 0;
          const getState = () => ({
            contacts: {
              [contactId]: {},
            },
            getRemindersByContact: {
              isFetching: false,
              fetchedPageCount,
            },
          });
          API.Reminders.getAllByContact.mockReturnValue(Promise.reject(error));
          await getRemindersByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getRemindersByContactFetched(),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getRemindersByContactFailed(error),
          ]);
          expect(API.Reminders.getAllByContact.mock.calls.length).toBe(1);
          expect(API.Reminders.getAllByContact.mock.calls[0]).toEqual([
            contactId,
            fetchedPageCount + 1,
          ]);
        });
      });
    });
  });
});
