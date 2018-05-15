import {subscribeBeta} from '../actions';
import * as types from '../types';

describe('Redux', () => {
  describe('Beta', () => {
    describe('Actions', () => {
      it('subscribeBeta true', () => {
        expect(subscribeBeta(true)).toEqual({
          type: types.SUBSCRIBE_BETA,
          payload: {
            isSubscribed: true,
          },
        });
      });

      it('subscribeBeta false', () => {
        expect(subscribeBeta(false)).toEqual({
          type: types.SUBSCRIBE_BETA,
          payload: {isSubscribed: false},
        });
      });
    });
  });
});
