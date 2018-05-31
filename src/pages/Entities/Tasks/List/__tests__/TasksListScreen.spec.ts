import {getTasksByContact} from '@redux/tasks';
import {mapDispatchToProps, mapStateToProps} from '../TasksListScreen';

jest.mock('@redux/tasks', () => ({
  getTasksByContact: jest.fn(),
}));

const getTasksByContactMock = getTasksByContact as jest.Mock<{}>;

describe('Pages', () => {
  describe('TasksListScreen', () => {
    const contactId = 1;
    const additionalProps = {
      navigation: {state: {params: contactId}},
    };
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
      getTasksByContactMock.mockReset();
    });

    describe('mapDispatchToProps', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        expect(Object.keys(props)).toEqual(['pop', 'getTasksByContact']);
      });

      // it('pop should return a pop action trigger', () => {
      //   const props = mapDispatchToProps(dispatch, additionalProps);
      //   props.pop();
      //   expect(dispatch.mock.calls.length).toBe(1);
      //   expect(dispatch.mock.calls[0]).toEqual([pop()]);
      // });

      it('getTasksByContact should return a getTasksByContact action trigger', () => {
        const props = mapDispatchToProps(dispatch, additionalProps);
        props.getTasksByContact();
        expect(getTasksByContactMock.mock.calls.length).toBe(1);
        expect(getTasksByContactMock.mock.calls[0]).toEqual([contactId]);
      });
    });

    describe('mapStateToProps', () => {
      const defaultState = {
        contacts: {
          1: {
            id: 1,
          },
        },
        getTasksByContact: {
          isFetching: false,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(defaultState, additionalProps);
        expect(Object.keys(props)).toEqual(['tasks', 'isFetching']);
      });

      it('should return isFetching to true if it is fetching', () => {
        const state = {
          ...defaultState,
          getTasksByContact: {
            isFetching: true,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(true);
      });

      it('should return isFetching to false if it is not fetching', () => {
        const state = {
          ...defaultState,
          getTasksByContact: {
            isFetching: false,
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.isFetching).toBe(false);
      });

      it('should return the tasks of the contact (empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              tasks: [],
            },
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.tasks).toEqual([]);
      });

      it('should return the tasks of the contact (not empty)', () => {
        const state = {
          ...defaultState,
          contacts: {
            1: {
              tasks: [1, 2],
            },
          },
          tasks: {
            1: 'task1',
            2: 'task2',
          },
        };
        const props = mapStateToProps(state, additionalProps);
        expect(props.tasks).toEqual(['task1', 'task2']);
      });
    });
  });
});
