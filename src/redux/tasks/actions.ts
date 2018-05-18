import {ITask} from '@models';
import {action} from 'typesafe-actions';
import * as types from './types';

export const getTasksByContactFetched = (contactId: number) =>
  action(types.GET_TASKS_BY_CONTACT_FETCHED, {
    contactId,
  });

export const getTasksByContactSuccess = (contactId: number, tasks: ITask[]) =>
  action(types.GET_TASKS_BY_CONTACT_SUCCESS, {
    tasks,
    contactId,
  });

export const getTasksByContactFailed = (error: Error) =>
  action(types.GET_TASKS_BY_CONTACT_FAILED, {
    error,
  });
