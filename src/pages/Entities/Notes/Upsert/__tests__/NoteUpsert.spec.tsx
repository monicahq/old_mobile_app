import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {NoteUpsert} from '../NoteUpsert';

describe('Pages', () => {
  describe('Notes', () => {
    let pop;
    let updateNote;
    let contactId;
    let note;

    beforeEach(() => {
      pop = jest.fn();
      updateNote = jest.fn();
      contactId = 5;
      note = {body: 'c'};
    });

    it('should renders correctly', () => {
      const tree = shallow(
        <NoteUpsert
          pop={pop}
          updateNote={updateNote}
          contactId={contactId}
          note={note}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
});
