import {getGiftsByContact} from '@redux/gifts';
import {mapDispatchToProps, mapStateToProps} from '../GiftsListScreen';

jest.mock('@redux/gifts', () => ({
  getGiftsByContact: jest.fn(),
}));

const getGiftsByContactMock = getGiftsByContact as jest.Mock;

describe('Pages', () => {
  describe('GiftsListScreen', () => {
    const contactId = 1;
    const additionalProps = {
      navigation: {state: {params: contactId}},
    };
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
      getGiftsByContactMock.mockReset();
    });

    describe('mapDispatchToProps', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        expect(Object.keys(props)).toEqual(['pop', 'getGiftsByContact']);
      });

      // it('back should return a back action trigger', () => {
      //   const props = mapDispatchToProps(dispatch, additionalProps);
      //   props.back();
      //   expect(dispatch.mock.calls.length).toBe(1);
      //   expect(dispatch.mock.calls[0]).toEqual([back()]);
      // });

      it('getGiftsByContact should return a getGiftsByContact action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.getGiftsByContact();
        expect(getGiftsByContactMock.mock.calls.length).toBe(1);
        expect(getGiftsByContactMock.mock.calls[0]).toEqual([contactId]);
      });
    });

    describe('mapStateToProps', () => {
      const defaultState = {
        contacts: {
          1: {
            id: 1,
          },
        },
        getGiftsByContact: {
          isFetching: false,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(defaultState, additionalProps);
        expect(Object.keys(props)).toEqual(['gifts', 'isFetching']);
      });

      it('should return isFetching to true if it is fetching', () => {
        const state = {
          ...defaultState,
          getGiftsByContact: {
            isFetching: true,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(true);
      });

      it('should return isFetching to false if it is not fetching', () => {
        const state = {
          ...defaultState,
          getGiftsByContact: {
            isFetching: false,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(false);
      });

      it('should return the gifts of the contact (empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              gifts: [],
            },
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.gifts).toEqual([]);
      });

      it('should return the gifts of the contact (not empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              gifts: [1, 2],
            },
          },
          gifts: {
            1: 'gift1',
            2: 'gift2',
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.gifts).toEqual(['gift1', 'gift2']);
      });
    });
  });
});
