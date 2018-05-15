import {
  getTasksByContactFailed,
  getTasksByContactFetched,
  getTasksByContactSuccess,
} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Tasks', () => {
    describe('Actions', () => {
      it('getTasksByContactFetched', () => {
        expect(getTasksByContactFetched(4)).toEqual({
          type: types.GET_TASKS_BY_CONTACT_FETCHED,
          payload: {contactId: 4},
        });
      });

      it('getTasksByContactSuccess', () => {
        const contactId = 5;
        const tasks = ['item2', 'item1'];
        expect(getTasksByContactSuccess(contactId, tasks as any)).toEqual({
          type: types.GET_TASKS_BY_CONTACT_SUCCESS,
          payload: {
            tasks,
            contactId,
          },
        });
      });

      it('getTasksByContactFailed', () => {
        const error = new Error('My error');
        expect(getTasksByContactFailed(error)).toEqual({
          type: types.GET_TASKS_BY_CONTACT_FAILED,
          payload: {error},
        });
      });
    });
  });
});
