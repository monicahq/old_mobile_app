import {mapDispatchToProps, mapStateToProps} from '../RemindersScreen';
import {back} from 'redux/router';
import {getRemindersByContact} from 'redux/reminders';

jest.mock('redux/reminders', () => ({
  getRemindersByContact: jest.fn(),
}));

describe('Pages', () => {
  describe('RemindersScreen', () => {
    const contactId = 1;
    const additionalProps = {
      navigation: {state: {params: contactId}},
    };
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
      getRemindersByContact.mockReset();
    });

    describe('mapDispatchToProps', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        expect(Object.keys(props)).toEqual(['back', 'getRemindersByContact']);
      });

      it('back should return a back action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.back();
        expect(dispatch.mock.calls.length).toBe(1);
        expect(dispatch.mock.calls[0]).toEqual([back()]);
      });

      it('getRemindersByContact should return a getRemindersByContact action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.getRemindersByContact();
        expect(getRemindersByContact.mock.calls.length).toBe(1);
        expect(getRemindersByContact.mock.calls[0]).toEqual([contactId]);
      });
    });

    describe('mapStateToProps', () => {
      const defaultState = {
        contacts: {
          1: {
            id: 1,
          },
        },
        getRemindersByContact: {
          isFetching: false,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(defaultState, additionalProps);
        expect(Object.keys(props)).toEqual(['reminders', 'isFetching']);
      });

      it('should return isFetching to true if it is fetching', () => {
        const state = {
          ...defaultState,
          getRemindersByContact: {
            isFetching: true,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(true);
      });

      it('should return isFetching to false if it is not fetching', () => {
        const state = {
          ...defaultState,
          getRemindersByContact: {
            isFetching: false,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(false);
      });

      it('should return the reminders of the contact (empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              reminders: [],
            },
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.reminders).toEqual([]);
      });

      it('should return the reminders of the contact (not empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              reminders: [1, 2],
            },
          },
          reminders: {
            1: 'reminder1',
            2: 'reminder2',
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.reminders).toEqual(['reminder1', 'reminder2']);
      });
    });
  });
});
