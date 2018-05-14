import {IPageCountByContact, IReminder, IRootAction} from '@models';
import * as types from './types';

export interface IRemindersState {
  [reminderId: number]: IReminder;
}
export interface IRemindersGetByContactState {
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

export const remindersReducer = (
  state: IRemindersState = {},
  action: IRootAction
): IRemindersState => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_REMINDERS_BY_CONTACT_SUCCESS:
      const reminders = {...state};
      action.payload.reminders.forEach(item => {
        if (!reminders[item.id]) {
          reminders[item.id] = item;
        }
      });

      return reminders;
  }

  return state;
};

export const getByContactReducer = (
  state: IRemindersGetByContactState = getByContactInitialState,
  action: IRootAction
): IRemindersGetByContactState => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_REMINDERS_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: {
          [action.payload.contactId]:
            (state.fetchedPageCount[action.payload.contactId] || 0) + 1,
        },
      };

    case types.GET_REMINDERS_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_REMINDERS_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  }

  return state;
};
