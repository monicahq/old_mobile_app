import {IGift, IPageCountByContact, IRootAction} from '@models';
import * as types from './types';

export interface IGiftsState {
  [giftId: number]: IGift;
}
export interface IGiftsGetByContactState {
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

export const giftsReducer = (
  state: IGiftsState = {},
  action: IRootAction
): IGiftsState => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_GIFTS_BY_CONTACT_SUCCESS:
      const gifts = {...state};
      action.payload.gifts.forEach(item => {
        if (!gifts[item.id]) {
          gifts[item.id] = item;
        }
      });

      return gifts;
  }

  return state;
};

export const getByContactReducer = (
  state: IGiftsGetByContactState = getByContactInitialState,
  action: IRootAction
): IGiftsGetByContactState => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_GIFTS_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: {
          [action.payload.contactId]:
            (state.fetchedPageCount[action.payload.contactId] || 0) + 1,
        },
      };

    case types.GET_GIFTS_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_GIFTS_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  }

  return state;
};
