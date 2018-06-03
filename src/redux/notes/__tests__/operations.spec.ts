import {API} from '@api';
import {
  addNote,
  deleteNote,
  getNotesByContactFailed,
  getNotesByContactFetched,
  getNotesByContactSuccess,
  updateNote as updateNoteAction,
  updateNoteId,
} from '../actions';
import {getNotesByContact, postNote, updateNote} from '../operations';

jest.mock('@api', () => ({
  API: {
    Notes: {
      getAllByContact: jest.fn(),
      update: jest.fn(),
      post: jest.fn(),
    },
  },
}));
const getAllByContact = API.Notes.getAllByContact as jest.Mock<{}>;
const update = API.Notes.update as jest.Mock<{}>;
const post = API.Notes.post as jest.Mock<{}>;

describe('Redux', () => {
  describe('NOTES', () => {
    describe('Operations', () => {
      let dispatch;
      const contactId = 5;

      beforeEach(() => {
        dispatch = jest.fn();
        getAllByContact.mockReset();
        update.mockReset();
      });

      describe('getNotesByContact', () => {
        it('should not do anything if it is already fetching', async () => {
          const getState = () => ({
            getNotesByContact: {
              isFetching: true,
            },
          });
          await getNotesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
        });

        it('should not do anything if every element has already been fetched', async () => {
          const getState = () => ({
            contacts: {
              [contactId]: {
                statistics: {
                  number_of_notes: 5,
                },
                notes: [1, 2, 3, 4, 5],
              },
            },
            getNotesByContact: {
              isFetching: false,
            },
          });
          await getNotesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(0);
          expect(getAllByContact.mock.calls.length).toBe(0);
        });

        it('should trigger fetch action (success)', async () => {
          const res = {
            data: ['a'],
          };
          const fetchedPageCount = 3;
          const getState = () => ({
            contacts: {
              [contactId]: {},
            },
            getNotesByContact: {
              isFetching: false,
              fetchedPageCount: {
                [contactId]: fetchedPageCount,
              },
            },
          });
          getAllByContact.mockReturnValue(Promise.resolve(res));
          await getNotesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getNotesByContactFetched(contactId),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getNotesByContactSuccess(contactId, res.data as any),
          ]);
          expect(getAllByContact.mock.calls.length).toBe(1);
          expect(getAllByContact.mock.calls[0]).toEqual([
            contactId,
            fetchedPageCount + 1,
          ]);
        });

        it('should trigger fetch action (failed)', async () => {
          const error = new Error();
          const fetchedPageCount = 0;
          const getState = () => ({
            contacts: {
              [contactId]: {},
            },
            getNotesByContact: {
              isFetching: false,
              fetchedPageCount: {
                [contactId]: fetchedPageCount,
              },
            },
          });
          getAllByContact.mockReturnValue(Promise.reject(error));
          await getNotesByContact(contactId)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            getNotesByContactFetched(contactId),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            getNotesByContactFailed(error),
          ]);
          expect(getAllByContact.mock.calls.length).toBe(1);
          expect(getAllByContact.mock.calls[0]).toEqual([
            contactId,
            fetchedPageCount + 1,
          ]);
        });
      });

      describe('updateNote', () => {
        it('should trigger an update in redux and do nothing if the result is success', async () => {
          const note = {
            a: 'b',
          };
          // const fetchedPageCount = 3;
          const getState = () => ({
            notes: {},
          });
          update.mockReturnValue(Promise.resolve());
          await updateNote(note as any)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(1);
          expect(dispatch.mock.calls[0]).toEqual([
            updateNoteAction(note as any),
          ]);
        });

        it('should trigger an update in redux and reset the note if the action is failed', async () => {
          const note = {
            id: 2,
            a: 'b',
          };
          const oldNote = {
            id: 2,
            a: 'b',
          };
          // const fetchedPageCount = 3;
          const getState = () => ({
            notes: {
              2: oldNote,
            },
          });
          update.mockReturnValue(Promise.reject(new Error()));
          await updateNote(note as any)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            updateNoteAction(note as any),
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            updateNoteAction(oldNote as any),
          ]);
        });
      });

      describe('postNote', () => {
        it('should trigger an add in redux and update the id if the result is success', async () => {
          const note = {
            a: 'b',
          };
          const result = {
            data: {
              id: 1,
            },
          };
          const getState = () => ({
            notes: {},
          });
          post.mockReturnValue(Promise.resolve(result));
          await postNote(note as any)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            addNote({...note, id: 'temp-1'} as any), // Math.random() returns 1
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            updateNoteId('temp-1', result.data.id),
          ]);
        });

        it('should trigger an add in redux and delete the note if the action is failed', async () => {
          const note = {
            id: 2,
            a: 'b',
          };
          // const fetchedPageCount = 3;
          const getState = () => ({
            notes: {},
          });
          post.mockReturnValue(Promise.reject(new Error()));
          await postNote(note as any)(dispatch, getState);
          expect(dispatch.mock.calls.length).toBe(2);
          expect(dispatch.mock.calls[0]).toEqual([
            addNote({...note, id: 'temp-1'} as any), // Math.random() returns 1
          ]);
          expect(dispatch.mock.calls[1]).toEqual([
            deleteNote(note as any, 'temp-1'),
          ]);
        });
      });
    });
  });
});
