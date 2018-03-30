import {API} from '@api';
import {
  getActivitiesByContactFailed,
  getActivitiesByContactFetched,
  getActivitiesByContactSuccess,
} from '../actions';
import {getActivitiesByContact} from '../operations';

jest.mock('@api', () => ({
  API: {
    Activities: {
      getAllByContact: jest.fn(),
    },
  },
}));

const getAllByContact = API.Activities.getAllByContact as jest.Mock<{}>;

describe('Redux', () => {
  describe('ACTIVITIES', () => {
    describe('Operations', () => {
      let dispatch;
      const contactId = 5;

      beforeEach(() => {
        dispatch = jest.fn();
        getAllByContact.mockReset();
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
          expect(getAllByContact.mock.calls.length).toBe(0);
        });

        it('should trigger fetch action (success)', async () => {
          const statistics = {2014: 30};
          const res = {
            data: ['a'],
            meta: {statistics},
          };
          const fetchedPageCount = 3;
          const getState = () => ({
            contacts: {
              [contactId]: {},
            },
            getActivitiesByContact: {
              isFetching: false,
              fetchedPageCount: {
                [contactId]: fetchedPageCount,
              },
            },
          });
          getAllByContact.mockReturnValue(Promise.resolve(res));
          await getActivitiesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getActivitiesByContactFetched(contactId),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getActivitiesByContactSuccess(
              contactId,
              res.data as any,
              statistics
            ),
          ]);
          expect(getAllByContact.mock.calls.length).toBe(1);
          expect(getAllByContact.mock.calls[0]).toEqual([
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
              fetchedPageCount: {
                [contactId]: fetchedPageCount,
              },
            },
          });
          getAllByContact.mockReturnValue(Promise.reject(error));
          await getActivitiesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getActivitiesByContactFetched(contactId),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getActivitiesByContactFailed(error),
          ]);
          expect(getAllByContact.mock.calls.length).toBe(1);
          expect(getAllByContact.mock.calls[0]).toEqual([
            contactId,
            fetchedPageCount + 1,
          ]);
        });
      });
    });
  });
});
