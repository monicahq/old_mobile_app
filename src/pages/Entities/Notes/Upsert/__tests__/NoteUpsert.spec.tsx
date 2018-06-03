import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {NoteUpsert} from '../NoteUpsert';

describe('Pages', () => {
  describe('Notes', () => {
    let pop;
    let updateNote;
    let postNote;
    let contact;
    let note;

    beforeEach(() => {
      pop = jest.fn();
      updateNote = jest.fn();
      postNote = jest.fn();
      contact = {
        first_name: 'Theo',
      };
      note = {body: 'c'};
    });

    it('should renders correctly', () => {
      const tree = shallow(
        <NoteUpsert
          pop={pop}
          updateNote={updateNote}
          postNote={postNote}
          contact={contact}
          note={note}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
});
