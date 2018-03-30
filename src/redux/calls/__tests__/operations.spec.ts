import {API} from '@api';
import {
  getCallsByContactFailed,
  getCallsByContactFetched,
  getCallsByContactSuccess,
} from '../actions';
import {getCallsByContact} from '../operations';

jest.mock('@api', () => ({
  API: {
    Calls: {
      getAllByContact: jest.fn(),
    },
  },
}));

const getAllByContact = API.Calls.getAllByContact as jest.Mock<{}>;

describe('Redux', () => {
  describe('CALLS', () => {
    describe('Operations', () => {
      let dispatch;
      const contactId = 5;

      beforeEach(() => {
        dispatch = jest.fn();
        getAllByContact.mockReset();
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
          expect(getAllByContact.mock.calls.length).toBe(0);
        });

        it('should trigger fetch action (success)', async () => {
          const statistics = {2017: 30};
          const res = {
            data: ['a'],
            meta: {statistics},
          };
          const fetchedPageCount = 3;
          const getState = () => ({
            contacts: {
              [contactId]: {},
            },
            getCallsByContact: {
              isFetching: false,
              fetchedPageCount: {
                [contactId]: fetchedPageCount,
              },
            },
          });
          getAllByContact.mockReturnValue(Promise.resolve(res));
          await getCallsByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getCallsByContactFetched(contactId),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getCallsByContactSuccess(contactId, res.data as any, statistics),
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
            getCallsByContact: {
              isFetching: false,
              fetchedPageCount: {
                [contactId]: fetchedPageCount,
              },
            },
          });
          getAllByContact.mockReturnValue(Promise.reject(error));
          await getCallsByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getCallsByContactFetched(contactId),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getCallsByContactFailed(error),
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
