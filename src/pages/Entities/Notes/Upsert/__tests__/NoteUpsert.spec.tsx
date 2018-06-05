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

    it('should renders correctly (editing)', () => {
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

    it('should renders correctly (creating)', () => {
      const tree = shallow(
        <NoteUpsert
          pop={pop}
          updateNote={updateNote}
          postNote={postNote}
          contact={contact}
          note={null}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    describe('handleDoneAction', () => {
      it('should submit the form and set every field to touched', () => {
        const tree = shallow(
          <NoteUpsert
            pop={pop}
            updateNote={updateNote}
            postNote={postNote}
            contact={contact}
            note={note}
          />
        );
        const formRef = {
          current: {
            submitForm: jest.fn(),
            setTouched: jest.fn(),
          },
        };
        tree.instance().formRef = formRef;
        tree.instance().handleDoneAction();
        expect(formRef.current.submitForm.mock.calls).toEqual([[]]);
        expect(formRef.current.setTouched.mock.calls.length).toBe(1);
        expect(formRef.current.setTouched.mock.calls[0]).toEqual([
          {
            body: true,
            contact: true,
            is_favorited: true,
          },
        ]);
      });
    });

    describe('onSuccess', () => {
      it('should trigger updateNote if there is a note', () => {
        note = {body: 'bwww'};
        const newNote = {body: 'newbody'};

        const tree = shallow(
          <NoteUpsert
            pop={pop}
            updateNote={updateNote}
            postNote={postNote}
            contact={contact}
            note={note}
          />
        );
        tree.instance().onSuccess(newNote);
        expect(updateNote.mock.calls.length).toBe(1);
        expect(updateNote.mock.calls[0]).toEqual([newNote]);
      });

      it('should trigger updateNote if there is a note', () => {
        const newNote = {body: 'newbody'};

        const tree = shallow(
          <NoteUpsert
            pop={pop}
            updateNote={updateNote}
            postNote={postNote}
            contact={contact}
            note={null}
          />
        );
        tree.instance().onSuccess(newNote);
        expect(postNote.mock.calls.length).toBe(1);
        expect(postNote.mock.calls[0]).toEqual([newNote]);
      });
    });
  });
});
