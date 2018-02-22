import {
  getContactsFailed,
  getContactsFetched,
  getContactsSuccess,
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
        expect(getContactsSuccess(items, count)).toEqual({
          type: types.GET_ALL_SUCCESS,
          items,
          count,
        });
      });

      it('getContactsFailed', () => {
        const error = new Error('My error');
        expect(getContactsFailed(error)).toEqual({
          type: types.GET_ALL_FAILED,
          error,
        });
      });
    });
  });
});
