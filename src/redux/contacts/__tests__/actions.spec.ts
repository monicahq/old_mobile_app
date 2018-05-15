import {
  getContactsFailed,
  getContactsFetched,
  getContactsSuccess,
  searchContactsFailed,
  searchContactsFetched,
  searchContactsSuccess,
} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Contacts', () => {
    describe('Actions', () => {
      it('getContactsFetched', () => {
        expect(getContactsFetched()).toEqual({
          type: types.GET_ALL_FETCHED,
        });
      });

      it('getContactsSuccess', () => {
        const items = ['item2', 'item1'];
        const count = 5;
        expect(getContactsSuccess(items as any, count)).toEqual({
          type: types.GET_ALL_SUCCESS,
          payload: {
            items,
            count,
          },
        });
      });

      it('getContactsFailed', () => {
        const error = new Error('My error');
        expect(getContactsFailed(error)).toEqual({
          type: types.GET_ALL_FAILED,
          payload: {error},
        });
      });

      it('searchContactsFetched', () => {
        const query = 'my-query';
        expect(searchContactsFetched(query)).toEqual({
          payload: {query},
          type: types.SEARCH_FETCHED,
        });
      });

      it('searchContactsSuccess', () => {
        const items = ['item2', 'item1'];
        const count = 5;
        expect(searchContactsSuccess(items as any, count)).toEqual({
          type: types.SEARCH_SUCCESS,
          payload: {
            items,
            count,
          },
        });
      });

      it('searchContactsFailed', () => {
        const error = new Error('My error');
        expect(searchContactsFailed(error)).toEqual({
          type: types.SEARCH_FAILED,
          payload: {error},
        });
      });
    });
  });
});
