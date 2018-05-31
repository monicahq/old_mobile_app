import {getCallsByContact} from '@redux/calls';
import {mapDispatchToProps, mapStateToProps} from '../CallsListScreen';

jest.mock('@redux/calls', () => ({
  getCallsByContact: jest.fn(),
}));

const getCallsByContactMock = getCallsByContact as jest.Mock;

describe('Pages', () => {
  describe('CallsListScreen', () => {
    const contactId = 1;
    const additionalProps = {
      navigation: {state: {params: contactId}},
    };
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
      getCallsByContactMock.mockReset();
    });

    describe('mapDispatchToProps', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        expect(Object.keys(props)).toEqual(['pop', 'getCallsByContact']);
      });

      it('getCallsByContact should return a getCallsByContact action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.getCallsByContact();
        expect(getCallsByContactMock.mock.calls.length).toBe(1);
        expect(getCallsByContactMock.mock.calls[0]).toEqual([contactId]);
      });
    });

    describe('mapStateToProps', () => {
      const defaultState = {
        contacts: {
          1: {
            id: 1,
          },
        },
        getCallsByContact: {
          isFetching: false,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(defaultState as any, additionalProps);
        expect(Object.keys(props)).toEqual([
          'calls',
          'isFetching',
          'statistics',
        ]);
      });

      it('should return isFetching to true if it is fetching', () => {
        const state = {
          ...defaultState,
          getCallsByContact: {
            isFetching: true,
          },
        };
        const props = mapStateToProps(state as any, additionalProps);
        expect(props.isFetching).toBe(true);
      });

      it('should return isFetching to false if it is not fetching', () => {
        const state = {
          ...defaultState,
          getCallsByContact: {
            isFetching: false,
          },
        };
        const props = mapStateToProps(state as any, additionalProps);
        expect(props.isFetching).toBe(false);
      });

      it('should return the calls of the contact (empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              calls: [],
            },
          },
        };
        const props = mapStateToProps(state as any, additionalProps);
        expect(props.calls).toEqual([]);
      });

      it('should return the calls of the contact (not empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              calls: [1, 2],
            },
          },
          calls: {
            1: 'call1',
            2: 'call2',
          },
        };
        const props = mapStateToProps(state as any, additionalProps);
        expect(props.calls).toEqual(['call1', 'call2']);
      });
    });
  });
});
