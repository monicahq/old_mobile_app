import {mapStateToProps} from '../NoteUpsertScreen';

describe('Pages', () => {
  describe('NoteUpsertScreen', () => {
    describe('mapStateToProps', () => {
      const contactId = 8;
      const noteId = 10;
      const note = {a: 'b'};
      const defaultNavigationParams = {
        navigation: {state: {params: {contactId, noteId}}},
      };
      const defaultState = {
        notes: {
          [noteId]: note,
        },
      };

      it('should contains every key', () => {
        const props = mapStateToProps(
          defaultState as any,
          defaultNavigationParams
        );
        expect(Object.keys(props)).toEqual(['contactId', 'note']);
      });

      it('should return the contactId', () => {
        const props = mapStateToProps(
          defaultState as any,
          defaultNavigationParams
        );
        expect(props.contactId).toBe(contactId);
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
