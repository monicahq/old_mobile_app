import {
  getDebtsByContactFailed,
  getDebtsByContactFetched,
  getDebtsByContactSuccess,
} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Debts', () => {
    describe('Actions', () => {
      it('getDebtsByContactFetched', () => {
        expect(getDebtsByContactFetched()).toEqual({
          type: types.GET_DEBTS_BY_CONTACT_FETCHED,
        });
      });

      it('getDebtsByContactSuccess', () => {
        const contactId = 5;
        const debts = ['item2', 'item1'];
        expect(getDebtsByContactSuccess(contactId, debts)).toEqual({
          type: types.GET_DEBTS_BY_CONTACT_SUCCESS,
          debts,
          contactId,
        });
      });

      it('getDebtsByContactFailed', () => {
        const error = new Error('My error');
        expect(getDebtsByContactFailed(error)).toEqual({
          type: types.GET_DEBTS_BY_CONTACT_FAILED,
          error,
        });
      });
    });
  });
});
