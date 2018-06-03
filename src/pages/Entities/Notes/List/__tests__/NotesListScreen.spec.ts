import {getNotesByContact} from '@redux/notes';
import {mapDispatchToProps, mapStateToProps} from '../NotesListScreen';

jest.mock('@redux/notes', () => ({
  getNotesByContact: jest.fn(),
}));

const getNotesByContactMock = getNotesByContact as jest.Mock<{}>;

describe('Pages', () => {
  describe('NotesListScreen', () => {
    const contactId = 1;
    const additionalProps = {
      navigation: {state: {params: contactId}},
    };
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
      getNotesByContactMock.mockReset();
    });

    describe('mapDispatchToProps', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        expect(Object.keys(props)).toEqual([
          'pop',
          'navigateToAddNote',
          'navigateToNote',
          'getNotesByContact',
        ]);
      });

      // it('back should return a back action trigger', () => {
      //   const props = mapDispatchToProps(dispatch, additionalProps);
      //   props.back();
      //   expect(dispatch.mock.calls.length).toBe(1);
      //   expect(dispatch.mock.calls[0]).toEqual([back()]);
      // });

      it('getNotesByContact should return a getNotesByContact action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.getNotesByContact();
        expect(getNotesByContactMock.mock.calls.length).toBe(1);
        expect(getNotesByContactMock.mock.calls[0]).toEqual([contactId]);
      });
    });

    describe('mapStateToProps', () => {
      const defaultState = {
        contacts: {
          1: {
            id: 1,
          },
        },
        getNotesByContact: {
          isFetching: false,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(defaultState, additionalProps);
        expect(Object.keys(props)).toEqual(['notes', 'isFetching']);
      });

      it('should return isFetching to true if it is fetching', () => {
        const state = {
          ...defaultState,
          getNotesByContact: {
            isFetching: true,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(true);
      });

      it('should return isFetching to false if it is not fetching', () => {
        const state = {
          ...defaultState,
          getNotesByContact: {
            isFetching: false,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(false);
      });

      it('should return the notes of the contact (empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              notes: [],
            },
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.notes).toEqual([]);
      });

      it('should return the notes of the contact (not empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              notes: [1, 2],
            },
          },
          notes: {
            1: 'note1',
            2: 'note2',
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.notes).toEqual(['note1', 'note2']);
      });
    });
  });
});
