import {getDebtsByContact} from '@redux/debts';
import {mapDispatchToProps, mapStateToProps} from '../DebtsListScreen';

jest.mock('@redux/debts', () => ({
  getDebtsByContact: jest.fn(),
}));

const getDebtsByContactMock = getDebtsByContact as jest.Mock<{}>;

describe('Pages', () => {
  describe('DebtsListScreen', () => {
    const contactId = 1;
    const additionalProps = {
      navigation: {state: {params: contactId}},
    };
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
      getDebtsByContactMock.mockReset();
    });

    describe('mapDispatchToProps', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        expect(Object.keys(props)).toEqual(['pop', 'getDebtsByContact']);
      });

      // it('back should return a back action trigger', () => {
      //   const props = mapDispatchToProps(dispatch, additionalProps);
      //   props.back();
      //   expect(dispatch.mock.calls.length).toBe(1);
      //   expect(dispatch.mock.calls[0]).toEqual([back()]);
      // });

      it('getDebtsByContact should return a getDebtsByContact action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.getDebtsByContact();
        expect(getDebtsByContactMock.mock.calls.length).toBe(1);
        expect(getDebtsByContactMock.mock.calls[0]).toEqual([contactId]);
      });
    });

    describe('mapStateToProps', () => {
      const defaultState = {
        contacts: {
          1: {
            id: 1,
          },
        },
        getDebtsByContact: {
          isFetching: false,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(defaultState, additionalProps);
        expect(Object.keys(props)).toEqual(['debts', 'isFetching']);
      });

      it('should return isFetching to true if it is fetching', () => {
        const state = {
          ...defaultState,
          getDebtsByContact: {
            isFetching: true,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(true);
      });

      it('should return isFetching to false if it is not fetching', () => {
        const state = {
          ...defaultState,
          getDebtsByContact: {
            isFetching: false,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(false);
      });

      it('should return the debts of the contact (empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              debts: [],
            },
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.debts).toEqual([]);
      });

      it('should return the debts of the contact (not empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              debts: [1, 2],
            },
          },
          debts: {
            1: 'debt1',
            2: 'debt2',
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.debts).toEqual(['debt1', 'debt2']);
      });
    });
  });
});
