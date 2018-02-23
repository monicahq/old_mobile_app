import {getContacts} from '../operations';
import {
  getContactsFailed,
  getContactsFetched,
  getContactsSuccess,
} from '../actions';
import {API} from 'api';

jest.mock('api', () => ({
  API: {
    Contacts: {
      getAll: jest.fn(),
    },
  },
}));

describe('Redux', () => {
  describe('Contacts', () => {
    describe('Operations', () => {
      let dispatch;

      beforeEach(() => {
        dispatch = jest.fn();
        API.Contacts.getAll.mockReset();
      });

      describe('getContacts', () => {
        it('should not do anything if it is already fetching', async () => {
          const getState = () => ({
            getAllContacts: {
              isFetching: true,
            },
          });
          await getContacts()(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          // expect(API.Contacts.getAll.mock.calls.length).toBe(0);
        });

        it('should not do anything if every element has already been fetched', async () => {
          const getState = () => ({
            getAllContacts: {
              isFetching: false,
              count: 1,
              items: [{}],
            },
          });
          await getContacts()(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          expect(API.Contacts.getAll.mock.calls.length).toBe(0);
        });

        it('should trigger fetch action (success)', async () => {
          const res = {
            data: ['a'],
            meta: {
              total: 20,
            },
          };
          const fetchedPageCount = 3;
          const getState = () => ({
            getAllContacts: {
              isFetching: false,
              items: [],
              fetchedPageCount,
            },
          });
          API.Contacts.getAll.mockReturnValue(Promise.resolve(res));
          await getContacts()(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([getContactsFetched()]);
          expect(dispatch.mock.calls[1]).toEqual([
            getContactsSuccess(res.data, res.meta.total),
          ]);
          expect(API.Contacts.getAll.mock.calls.length).toBe(1);
          expect(API.Contacts.getAll.mock.calls[0]).toEqual([
            fetchedPageCount + 1,
          ]);
        });

        it('should trigger fetch action (failed)', async () => {
          const error = new Error();
          const fetchedPageCount = 0;
          const getState = () => ({
            getAllContacts: {
              isFetching: false,
              items: [],
              fetchedPageCount,
            },
          });
          API.Contacts.getAll.mockReturnValue(Promise.reject(error));
          await getContacts()(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([getContactsFetched()]);
          expect(dispatch.mock.calls[1]).toEqual([getContactsFailed(error)]);
          expect(API.Contacts.getAll.mock.calls.length).toBe(1);
          expect(API.Contacts.getAll.mock.calls[0]).toEqual([
            fetchedPageCount + 1,
          ]);
        });
      });
    });
  });
});
