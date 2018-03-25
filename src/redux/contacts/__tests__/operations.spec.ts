import {API} from '@api';
import {
  getContactsFailed,
  getContactsFetched,
  getContactsSuccess,
  searchContactsFailed,
  searchContactsFetched,
  searchContactsSuccess,
} from '../actions';
import {getContacts, searchContacts} from '../operations';

jest.mock('@api', () => ({
  API: {
    Contacts: {
      getAll: jest.fn(),
    },
  },
}));

const APIgetAll = API.Contacts.getAll as jest.Mock<{}>;

describe('Redux', () => {
  describe('Contacts', () => {
    describe('Operations', () => {
      let dispatch;

      beforeEach(() => {
        dispatch = jest.fn();
        APIgetAll.mockReset();
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
          // expect(APIgetAll.mock.calls.length).toBe(0);
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
          expect(APIgetAll.mock.calls.length).toBe(0);
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
          APIgetAll.mockReturnValue(Promise.resolve(res));
          await getContacts()(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([getContactsFetched()]);
          expect(dispatch.mock.calls[1]).toEqual([
            getContactsSuccess(res.data as any, res.meta.total),
          ]);
          expect(APIgetAll.mock.calls.length).toBe(1);
          expect(APIgetAll.mock.calls[0]).toEqual([fetchedPageCount + 1]);
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
          APIgetAll.mockReturnValue(Promise.reject(error));
          await getContacts()(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([getContactsFetched()]);
          expect(dispatch.mock.calls[1]).toEqual([getContactsFailed(error)]);
          expect(APIgetAll.mock.calls.length).toBe(1);
          expect(APIgetAll.mock.calls[0]).toEqual([fetchedPageCount + 1]);
        });
      });

      describe('searchContacts', () => {
        it('should not do anything if it is already fetching', async () => {
          const getState = () => ({
            searchContacts: {
              isFetching: true,
            },
          });
          await searchContacts()(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          // expect(APIgetAll.mock.calls.length).toBe(0);
        });

        it('should not do anything if every element has already been fetched', async () => {
          const getState = () => ({
            searchContacts: {
              isFetching: false,
              count: 1,
              items: [{}],
            },
          });
          await searchContacts()(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          expect(APIgetAll.mock.calls.length).toBe(0);
        });

        it('should trigger fetch action (success)', async () => {
          const query = 'query';
          const res = {
            data: ['a'],
            meta: {
              total: 20,
            },
          };
          const fetchedPageCount = 3;
          const getState = () => ({
            searchContacts: {
              isFetching: false,
              items: [],
              fetchedPageCount,
            },
          });
          APIgetAll.mockReturnValue(Promise.resolve(res));
          await searchContacts(query)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            searchContactsFetched(query),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            searchContactsSuccess(res.data as any, res.meta.total),
          ]);
          expect(APIgetAll.mock.calls.length).toBe(1);
          expect(APIgetAll.mock.calls[0]).toEqual([
            fetchedPageCount + 1,
            undefined,
            query,
          ]);
        });

        it('should trigger fetch action (failed)', async () => {
          const query = 'query';
          const error = new Error();
          const fetchedPageCount = 0;
          const getState = () => ({
            searchContacts: {
              isFetching: false,
              items: [],
              fetchedPageCount,
            },
          });
          APIgetAll.mockReturnValue(Promise.reject(error));
          await searchContacts(query)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            searchContactsFetched(query),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([searchContactsFailed(error)]);
          expect(APIgetAll.mock.calls.length).toBe(1);
          expect(APIgetAll.mock.calls[0]).toEqual([
            fetchedPageCount + 1,
            undefined,
            query,
          ]);
        });
      });
    });
  });
});
