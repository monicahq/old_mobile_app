import {IPageCountByContact, IRootAction, ITask} from '@models';
import * as types from './types';

export interface ITasksState {
  [taskId: number]: ITask;
}
export interface ITasksGetByContactState {
  error: Error;
  isFetching: boolean;
  lastUpdated: number;
  fetchedPageCount: IPageCountByContact;
}

const getByContactInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: {},
};

export const tasksReducer = (
  state: ITasksState = {},
  action: IRootAction
): ITasksState => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_TASKS_BY_CONTACT_SUCCESS:
      const tasks = {...state};
      action.payload.tasks.forEach(item => {
        if (!tasks[item.id]) {
          tasks[item.id] = item;
        }
      });

      return tasks;
  }

  return state;
};

export const getByContactReducer = (
  state: ITasksGetByContactState = getByContactInitialState,
  action: IRootAction
): ITasksGetByContactState => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_TASKS_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: {
          [action.payload.contactId]:
            (state.fetchedPageCount[action.payload.contactId] || 0) + 1,
        },
      };

    case types.GET_TASKS_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_TASKS_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  }

  return state;
};
