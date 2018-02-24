import * as types from './types';
import * as noteTypes from '../notes/types';
import * as debtTypes from '../debts/types';
import * as activityTypes from '../activities/types';
import * as callTypes from '../calls/types';
import * as giftTypes from '../gifts/types';
import * as reminderTypes from '../reminders/types';
import * as taskTypes from '../tasks/types';

const getAllInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: 0,
  items: [],
  count: null,
};

export const contactsReducer = (state = {}, action) => {
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
    case noteTypes.GET_NOTES_BY_CONTACT_SUCCESS:
      const noteId = action.contactId;
      return {
        ...state,
        [noteId]: {
          ...state[noteId],
          notes: [
            ...(state[noteId].notes || []),
            ...action.notes.map(note => note.id),
          ],
        },
      };

    case debtTypes.GET_DEBTS_BY_CONTACT_SUCCESS:
      const debtId = action.contactId;
      return {
        ...state,
        [debtId]: {
          ...state[debtId],
          debts: [
            ...(state[debtId].debts || []),
            ...action.debts.map(debt => debt.id),
          ],
        },
      };

    case activityTypes.GET_ACTIVITIES_BY_CONTACT_SUCCESS:
      const activityId = action.contactId;
      return {
        ...state,
        [activityId]: {
          ...state[activityId],
          activities: [
            ...(state[activityId].activities || []),
            ...action.activities.map(activity => activity.id),
          ],
        },
      };

    case giftTypes.GET_GIFTS_BY_CONTACT_SUCCESS:
      const giftId = action.contactId;
      return {
        ...state,
        [giftId]: {
          ...state[giftId],
          gifts: [
            ...(state[giftId].gifts || []),
            ...action.gifts.map(gift => gift.id),
          ],
        },
      };

    case reminderTypes.GET_REMINDERS_BY_CONTACT_SUCCESS:
      const reminderId = action.contactId;
      return {
        ...state,
        [reminderId]: {
          ...state[reminderId],
          reminders: [
            ...(state[reminderId].reminders || []),
            ...action.reminders.map(reminder => reminder.id),
          ],
        },
      };

    case taskTypes.GET_REMINDERS_BY_CONTACT_SUCCESS:
      const taskId = action.contactId;
      return {
        ...state,
        [taskId]: {
          ...state[taskId],
          tasks: [
            ...(state[taskId].tasks || []),
            ...action.tasks.map(task => task.id),
          ],
        },
      };

    case callTypes.GET_CALLS_BY_CONTACT_SUCCESS:
      const callId = action.contactId;
      return {
        ...state,
        [callId]: {
          ...state[callId],
          calls: [
            ...(state[callId].calls || []),
            ...action.calls.map(call => call.id),
          ],
        },
      };
  }

  return state;
};

export const getAllReducer = (state = getAllInitialState, action) => {
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
        items: [...state.items, ...action.items.map(item => item.id)],
        count: action.count,
      };

    // GET ALL FAILED
    case types.GET_ALL_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
  }

  return state;
};
