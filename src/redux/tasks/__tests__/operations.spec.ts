import {API} from '@api';
import {
  getTasksByContactFailed,
  getTasksByContactFetched,
  getTasksByContactSuccess,
} from '../actions';
import {getTasksByContact} from '../operations';

jest.mock('@api', () => ({
  API: {
    Tasks: {
      getAllByContact: jest.fn(),
    },
  },
}));

const getAllByContact = API.Tasks.getAllByContact as jest.Mock<{}>;

describe('Redux', () => {
  describe('TASKS', () => {
    describe('Operations', () => {
      let dispatch;
      const contactId = 5;

      beforeEach(() => {
        dispatch = jest.fn();
        getAllByContact.mockReset();
      });

      describe('getTasksByContact', () => {
        it('should not do anything if it is already fetching', async () => {
          const getState = () => ({
            getTasksByContact: {
              isFetching: true,
            },
          });
          await getTasksByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
        });

        it('should not do anything if every element has already been fetched', async () => {
          const getState = () => ({
            contacts: {
              [contactId]: {
                statistics: {
                  number_of_tasks: 5,
                },
                tasks: [1, 2, 3, 4, 5],
              },
            },
            getTasksByContact: {
              isFetching: false,
            },
          });
          await getTasksByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          expect(getAllByContact.mock.calls.length).toBe(0);
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
            getTasksByContact: {
              isFetching: false,
              fetchedPageCount: {
                [contactId]: fetchedPageCount,
              },
            },
          });
          getAllByContact.mockReturnValue(Promise.resolve(res));
          await getTasksByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getTasksByContactFetched(contactId),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getTasksByContactSuccess(contactId, res.data as any),
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
            getTasksByContact: {
              isFetching: false,
              fetchedPageCount: {
                [contactId]: fetchedPageCount,
              },
            },
          });
          getAllByContact.mockReturnValue(Promise.reject(error));
          await getTasksByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getTasksByContactFetched(contactId),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getTasksByContactFailed(error),
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
