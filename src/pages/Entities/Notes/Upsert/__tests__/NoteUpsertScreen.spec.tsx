import {mapStateToProps} from '../NoteUpsertScreen';

describe('Pages', () => {
  describe('NoteUpsertScreen', () => {
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
