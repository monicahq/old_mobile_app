import {getActivitiesByContact} from '../operations';
import {
  getActivitiesByContactFailed,
  getActivitiesByContactFetched,
  getActivitiesByContactSuccess,
} from '../actions';
import {API} from 'api';

jest.mock('api', () => ({
  API: {
    Activities: {
      getAllByContact: jest.fn(),
    },
  },
}));

describe('Redux', () => {
  describe('ACTIVITIES', () => {
    describe('Operations', () => {
      let dispatch;
      const contactId = 5;

      beforeEach(() => {
        dispatch = jest.fn();
        API.Activities.getAllByContact.mockReset();
      });

      describe('getActivitiesByContact', () => {
        it('should not do anything if it is already fetching', async () => {
          const getState = () => ({
            getActivitiesByContact: {
              isFetching: true,
            },
          });
          await getActivitiesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
        });

        it('should not do anything if every element has already been fetched', async () => {
          const getState = () => ({
            contacts: {
              [contactId]: {
                statistics: {
                  number_of_activities: 5,
                },
                activities: [1, 2, 3, 4, 5],
              },
            },
            getActivitiesByContact: {
              isFetching: false,
            },
          });
          await getActivitiesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          expect(API.Activities.getAllByContact.mock.calls.length).toBe(0);
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
            getActivitiesByContact: {
              isFetching: false,
              fetchedPageCount,
            },
          });
          API.Activities.getAllByContact.mockReturnValue(Promise.resolve(res));
          await getActivitiesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getActivitiesByContactFetched(),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getActivitiesByContactSuccess(contactId, res.data),
          ]);
          expect(API.Activities.getAllByContact.mock.calls.length).toBe(1);
          expect(API.Activities.getAllByContact.mock.calls[0]).toEqual([
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
            getActivitiesByContact: {
              isFetching: false,
              fetchedPageCount,
            },
          });
          API.Activities.getAllByContact.mockReturnValue(Promise.reject(error));
          await getActivitiesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getActivitiesByContactFetched(),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getActivitiesByContactFailed(error),
          ]);
          expect(API.Activities.getAllByContact.mock.calls.length).toBe(1);
          expect(API.Activities.getAllByContact.mock.calls[0]).toEqual([
            contactId,
            fetchedPageCount + 1,
          ]);
        });
      });
    });
  });
});
