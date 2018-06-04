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
  lastUpdated: null,
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
      action.payload.items.forEach(item => {
        if (!contacts[item.id]) {
          contacts[item.id] = item;
        }
      });
      return contacts;
    // SEARCH SUCCESS
    case types.SEARCH_SUCCESS:
      const contactsSearch = {...state};
      action.payload.items.forEach(item => {
        if (!contactsSearch[item.id]) {
          contactsSearch[item.id] = item;
        }
      });
      return contactsSearch;

    case noteTypes.GET_NOTES_BY_CONTACT_SUCCESS:
      contactId = action.payload.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          notes: [
            ...(state[contactId].notes || []),
            ...action.payload.notes.map(note => note.id),
          ],
        },
      };

    case debtTypes.GET_DEBTS_BY_CONTACT_SUCCESS:
      contactId = action.payload.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          debts: [
            ...(state[contactId].debts || []),
            ...action.payload.debts.map(debt => debt.id),
          ],
        },
      };

    case activityTypes.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      contactId = action.payload.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          activities: [
            ...(state[contactId].activities || []),
            ...action.payload.activities.map(activity => activity.id),
          ],
        },
      };

    case giftTypes.GET_GIFTS_BY_CONTACT_SUCCESS:
      contactId = action.payload.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          gifts: [
            ...(state[contactId].gifts || []),
            ...action.payload.gifts.map(gift => gift.id),
          ],
        },
      };

    case reminderTypes.GET_REMINDERS_BY_CONTACT_SUCCESS:
      contactId = action.payload.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          reminders: [
            ...(state[contactId].reminders || []),
            ...action.payload.reminders.map(reminder => reminder.id),
          ],
        },
      };

    case taskTypes.GET_TASKS_BY_CONTACT_SUCCESS:
      contactId = action.payload.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          tasks: [
            ...(state[contactId].tasks || []),
            ...action.payload.tasks.map(task => task.id),
          ],
        },
      };

    case callTypes.GET_CALLS_BY_CONTACT_SUCCESS:
      contactId = action.payload.contactId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          calls: [
            ...(state[contactId].calls || []),
            ...action.payload.calls.map(call => call.id),
          ],
        },
      };

    case noteTypes.ADD_NOTE:
      contactId = action.payload.contact.id;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          statistics: {
            ...state[contactId].statistics,
            number_of_notes: state[contactId].statistics.number_of_notes + 1,
          },
          notes: [action.payload.id, ...(state[contactId].notes || [])],
        },
      };

    case noteTypes.UPDATE_NOTE_ID:
      contactId = Object.keys(state).find(
        cId =>
          state[cId].notes &&
          state[cId].notes.indexOf(action.payload.noteId) !== -1
      );
      const notes = [...state[contactId].notes];
      notes[notes.indexOf(action.payload.noteId)] = action.payload.newId;
      return {
        ...state,
        [contactId]: {
          ...state[contactId],
          notes,
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
        lastUpdated: state.lastUpdated,
        fetchedPageCount: state.fetchedPageCount + 1,
      };

    // GET ALL SUCCESS
    case types.GET_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
        items: [...state.items, ...action.payload.items.map(item => item.id)],
        count: action.payload.count,
      };

    // GET ALL FAILED
    case types.GET_ALL_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
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
      const sameQuery = action.payload.query === state.query;
      return {
        ...state,
        items: sameQuery ? state.items : [],
        count: sameQuery ? state.count : 0,
        query: action.payload.query,
        error: null,
        isFetching: action.payload.query !== '',
        fetchedPageCount: sameQuery ? state.fetchedPageCount + 1 : 0,
      };

    // GET ALL SUCCESS
    case types.SEARCH_SUCCESS:
      const items = action.payload.items.map(item => item.id);
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
        items:
          state.fetchedPageCount === 1 ? items : [...state.items, ...items],
        count: action.payload.count,
      };

    // GET ALL FAILED
    case types.SEARCH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  }

  return state;
};
