import {getCallsByContact} from '../operations';
import {
  getCallsByContactFailed,
  getCallsByContactFetched,
  getCallsByContactSuccess,
} from '../actions';
import {API} from 'api';

jest.mock('api', () => ({
  API: {
    Calls: {
      getAllByContact: jest.fn(),
    },
  },
}));

describe('Redux', () => {
  describe('CALLS', () => {
    describe('Operations', () => {
      let dispatch;
      const contactId = 5;

      beforeEach(() => {
        dispatch = jest.fn();
        API.Calls.getAllByContact.mockReset();
      });

      describe('getCallsByContact', () => {
        it('should not do anything if it is already fetching', async () => {
          const getState = () => ({
            getCallsByContact: {
              isFetching: true,
            },
          });
          await getCallsByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
        });

        it('should not do anything if every element has already been fetched', async () => {
          const getState = () => ({
            contacts: {
              [contactId]: {
                statistics: {
                  number_of_calls: 5,
                },
                calls: [1, 2, 3, 4, 5],
              },
            },
            getCallsByContact: {
              isFetching: false,
            },
          });
          await getCallsByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          expect(API.Calls.getAllByContact.mock.calls.length).toBe(0);
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
            getCallsByContact: {
              isFetching: false,
              fetchedPageCount,
            },
          });
          API.Calls.getAllByContact.mockReturnValue(Promise.resolve(res));
          await getCallsByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([getCallsByContactFetched()]);
          expect(dispatch.mock.calls[1]).toEqual([
            getCallsByContactSuccess(contactId, res.data),
          ]);
          expect(API.Calls.getAllByContact.mock.calls.length).toBe(1);
          expect(API.Calls.getAllByContact.mock.calls[0]).toEqual([
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
            getCallsByContact: {
              isFetching: false,
              fetchedPageCount,
            },
          });
          API.Calls.getAllByContact.mockReturnValue(Promise.reject(error));
          await getCallsByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([getCallsByContactFetched()]);
          expect(dispatch.mock.calls[1]).toEqual([
            getCallsByContactFailed(error),
          ]);
          expect(API.Calls.getAllByContact.mock.calls.length).toBe(1);
          expect(API.Calls.getAllByContact.mock.calls[0]).toEqual([
            contactId,
            fetchedPageCount + 1,
          ]);
        });
      });
    });
  });
});
