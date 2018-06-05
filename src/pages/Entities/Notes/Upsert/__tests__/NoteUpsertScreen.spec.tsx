import {postNote, updateNote} from '@redux/notes';
import {mapDispatchToProps, mapStateToProps} from '../NoteUpsertScreen';

jest.mock('@redux/notes', () => ({
  postNote: jest.fn(),
  updateNote: jest.fn(),
}));

const postNoteMock = postNote as jest.Mock;
const updateNoteMock = updateNote as jest.Mock;

describe('Pages', () => {
  describe('NoteUpsertScreen', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
      postNoteMock.mockReset();
      updateNoteMock.mockReset();
    });

    describe('mapDispatchToProps', () => {
      it('should contains every key', () => {
        const props = mapDispatchToProps(dispatch);
        expect(Object.keys(props)).toEqual(['pop', 'updateNote', 'postNote']);
      });

      // it('back should return a back action trigger', () => {
      //   const props = mapDispatchToProps(dispatch, additionalProps);
      //   props.back();
      //   expect(dispatch.mock.calls.length).toBe(1);
      //   expect(dispatch.mock.calls[0]).toEqual([back()]);
      // });

      it('postNote should dispatch an action', () => {
        const note = {note: 'a'};
        const props = mapDispatchToProps(dispatch);
        props.postNote(note as any);

        expect(dispatch.mock.calls.length).toBe(1);
        expect(postNoteMock.mock.calls.length).toBe(1);
        expect(postNoteMock.mock.calls[0]).toEqual([note]);
      });

      it('updateNote should dispatch an action', () => {
        const note = {note: 'a'};
        const props = mapDispatchToProps(dispatch);
        props.updateNote(note as any);

        expect(dispatch.mock.calls.length).toBe(1);
        expect(updateNoteMock.mock.calls.length).toBe(1);
        expect(updateNoteMock.mock.calls[0]).toEqual([note]);
      });
    });

    describe('mapStateToProps', () => {
      const contactId = 8;
      const noteId = 10;
      const note = {a: 'b'};
      const contact = {first_name: 'Theo'};
      const defaultNavigationParams = {
        navigation: {state: {params: {contactId, noteId}}},
      };
      const defaultState = {
        contacts: {
          8: contact,
        },
        notes: {
          [noteId]: note,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(
          defaultState as any,
          defaultNavigationParams
        );
        expect(Object.keys(props)).toEqual(['contact', 'note']);
      });

      it('should return the contact', () => {
        const props = mapStateToProps(
          defaultState as any,
          defaultNavigationParams
        );
        expect(props.contact).toBe(contact);
      });

      it('should return the note', () => {
        const props = mapStateToProps(
          defaultState as any,
          defaultNavigationParams
        );
        expect(props.note).toEqual(defaultState.notes[noteId]);
      });
    });
  });
});
