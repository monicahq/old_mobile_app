import {mapDispatchToProps, mapStateToProps} from '../ActivitiesScreen';
import {back} from 'redux/router';
import {getActivitiesByContact} from 'redux/activities';

jest.mock('redux/activities', () => ({
  getActivitiesByContact: jest.fn(),
}));

describe('Pages', () => {
  describe('ActivitiesScreen', () => {
    const contactId = 1;
    const additionalProps = {
      navigation: {state: {params: contactId}},
    };
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
      getActivitiesByContact.mockReset();
    });

    describe('mapDispatchToProps', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        expect(Object.keys(props)).toEqual(['back', 'getActivitiesByContact']);
      });

      it('back should return a back action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.back();
        expect(dispatch.mock.calls.length).toBe(1);
        expect(dispatch.mock.calls[0]).toEqual([back()]);
      });

      it('getActivitiesByContact should return a getActivitiesByContact action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.getActivitiesByContact();
        expect(getActivitiesByContact.mock.calls.length).toBe(1);
        expect(getActivitiesByContact.mock.calls[0]).toEqual([contactId]);
      });
    });

    describe('mapStateToProps', () => {
      const defaultState = {
        contacts: {
          1: {
            id: 1,
          },
        },
        getActivitiesByContact: {
          isFetching: false,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(defaultState, additionalProps);
        expect(Object.keys(props)).toEqual([
          'contact',
          'activities',
          'isFetching',
        ]);
      });

      it('should return isFetching to true if it is fetching', () => {
        const state = {
          ...defaultState,
          getActivitiesByContact: {
            isFetching: true,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(true);
      });

      it('should return isFetching to false if it is not fetching', () => {
        const state = {
          ...defaultState,
          getActivitiesByContact: {
            isFetching: false,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(false);
      });

      it('should return the activities of the contact (empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              activities: [],
            },
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.activities).toEqual([]);
      });

      it('should return the activities of the contact (not empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              activities: [1, 2],
            },
          },
          activities: {
            1: 'activity1',
            2: 'activity2',
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.activities).toEqual(['activity1', 'activity2']);
      });
    });
  });
});
