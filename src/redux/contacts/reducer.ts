import {IContact, IRootAction} from '@models';
import * as activityTypes from '../activities/types';
import * as callTypes from '../calls/types';
import * as debtTypes from '../debts/types';
import * as giftTypes from '../gifts/types';
import * as noteTypes from '../notes/types';
import * as reminderTypes from '../reminders/types';
import * as taskTypes from '../tasks/types';
import * as types from './types';

export interface IContactsState {
  [contactId: number]: IContact;
}

export interface IGetAllContactsState {
  error: Error;
  isFetching: boolean;
  lastUpdated: number;
  fetchedPageCount: number;
  items: number[];
  count: number;
}

const getAllInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: 0,
  items: [],
  count: null,
};

export interface ISearchContactsState {
  query: string;
  error: Error;
  isFetching: boolean;
  lastUpdated: number;
  fetchedPageCount: number;
  items: number[];
  count: number;
}

const searchInitialState = {
  query: '',
  error: null,
  isFetching: false,
  fetchedPageCount: 0,
  items: [],
  count: null,
};

export const contactsReducer = (
  state: IContactsState = {},
  action: IRootAction
): IContactsState => {
  let contactId;

  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_ALL_SUCCESS:
      const contacts = {...state};
      action.items.forEach(item => {
        if (!contacts[item.id]) {
          contacts[item.id] = item;
        }
      });
      return contacts;
    // SEARCH SUCCESS
    case types.SEARCH_SUCCESS:
      const contactsSearch = {...state};
      action.items.forEach(item => {
        if (!contactsSearch[item.id]) {
          contactsSearch[item.id] = item;
        }
      });
      return contactsSearch;

    case noteTypes.GET_NOTES_BY_CONTACT_SUCCESS:
      contactId = action.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          notes: [
            ...(state[contactId].notes || []),
            ...action.notes.map(note => note.id),
          ],
        },
      };

    case debtTypes.GET_DEBTS_BY_CONTACT_SUCCESS:
      contactId = action.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          debts: [
            ...(state[contactId].debts || []),
            ...action.debts.map(debt => debt.id),
          ],
        },
      };

    case activityTypes.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      contactId = action.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          activities: [
            ...(state[contactId].activities || []),
            ...action.activities.map(activity => activity.id),
          ],
        },
      };

    case giftTypes.GET_GIFTS_BY_CONTACT_SUCCESS:
      contactId = action.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          gifts: [
            ...(state[contactId].gifts || []),
            ...action.gifts.map(gift => gift.id),
          ],
        },
      };

    case reminderTypes.GET_REMINDERS_BY_CONTACT_SUCCESS:
      contactId = action.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          reminders: [
            ...(state[contactId].reminders || []),
            ...action.reminders.map(reminder => reminder.id),
          ],
        },
      };

    case taskTypes.GET_TASKS_BY_CONTACT_SUCCESS:
      contactId = action.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          tasks: [
            ...(state[contactId].tasks || []),
            ...action.tasks.map(task => task.id),
          ],
        },
      };

    case callTypes.GET_CALLS_BY_CONTACT_SUCCESS:
      contactId = action.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          calls: [
            ...(state[contactId].calls || []),
            ...action.calls.map(call => call.id),
          ],
        },
      };
  }

  return state;
};

export const getAllReducer = (
  state: IGetAllContactsState = getAllInitialState,
  action: IRootAction
): IGetAllContactsState => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_ALL_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: state.fetchedPageCount + 1,
      };

    // GET ALL SUCCESS
    case types.GET_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
        items: [...state.items, ...action.items.map(item => item.id)],
        count: action.count,
      };

    // GET ALL FAILED
    case types.GET_ALL_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
  }

  return state;
};

export const searchReducer = (
  state = searchInitialState,
  action: IRootAction
) => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.SEARCH_FETCHED:
      const sameQuery = action.query === state.query;
      return {
        ...state,
        items: sameQuery ? state.items : [],
        count: sameQuery ? state.count : 0,
        query: action.query,
        error: null,
        isFetching: action.query !== '',
        fetchedPageCount: sameQuery ? state.fetchedPageCount + 1 : 1,
      };

    // GET ALL SUCCESS
    case types.SEARCH_SUCCESS:
      const items = action.items.map(item => item.id);
      return {
        ...state,
        isFetching: false,
        items:
          state.fetchedPageCount === 1 ? items : [...state.items, ...items],
        count: action.count,
      };

    // GET ALL FAILED
    case types.SEARCH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
  }

  return state;
};
