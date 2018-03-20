import {ITask} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const getTasksByContactFetched = createAction(
  types.GET_TASKS_BY_CONTACT_FETCHED,
  (contactId: number) => ({
    type: types.GET_TASKS_BY_CONTACT_FETCHED,
    contactId,
  })
);

export const getTasksByContactSuccess = createAction(
  types.GET_TASKS_BY_CONTACT_SUCCESS,
  (contactId: number, tasks: ITask[]) => ({
    type: types.GET_TASKS_BY_CONTACT_SUCCESS,
    tasks,
    contactId,
  })
);

export const getTasksByContactFailed = createAction(
  types.GET_TASKS_BY_CONTACT_FAILED,
  (error: Error) => ({
    type: types.GET_TASKS_BY_CONTACT_FAILED,
    error: true,
    payload: error,
  })
);

const actions = [
  getTasksByContactFetched,
  getTasksByContactSuccess,
  getTasksByContactFailed,
].map($call);
export type ITasksActions = typeof actions[number];
