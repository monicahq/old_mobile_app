import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Notes} from '../Notes';

describe('Pages', () => {
  describe('Notes', () => {
    let back;
    let getNotesByContact;

    beforeEach(() => {
      back = jest.fn();
      getNotesByContact = jest.fn();
    });

    it('should renders correctly without notes and fetching', () => {
      const notes = [];
      const tree = shallow(
        <Notes
          back={back}
          getNotesByContact={getNotesByContact}
          isFetching={true}
          notes={notes}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly without notes and not fetching', () => {
      const notes = [];
      const tree = shallow(
        <Notes
          back={back}
          getNotesByContact={getNotesByContact}
          isFetching={false}
          notes={notes}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly with notes and fetching', () => {
      const notes = [{body: 'My body', created_at: '1991-12-17'}];
      const tree = shallow(
        <Notes
          back={back}
          getNotesByContact={getNotesByContact}
          isFetching={true}
          notes={notes as any}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
      expect(
        toJson(shallow(tree.instance().renderItem({index: 0})))
      ).toMatchSnapshot();
    });

    it('should renders correctly with notes and fetching', () => {
      const notes = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      const tree = shallow(
        <Notes
          back={back}
          getNotesByContact={getNotesByContact}
          isFetching={false}
          notes={notes as any}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
      expect(
        toJson(shallow(tree.instance().renderItem({index: 0})))
      ).toMatchSnapshot();
      expect(
        toJson(shallow(tree.instance().renderItem({index: 1})))
      ).toMatchSnapshot();
    });

    it('should display the activity indicator in the footer if it is fetching', () => {
      const notes = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      const tree = shallow(
        <Notes
          back={back}
          getNotesByContact={getNotesByContact}
          isFetching={true}
          notes={notes as any}
        />
      );
      expect(toJson(shallow(tree.instance().renderFooter()))).toMatchSnapshot();
    });

    it('should not display the activity indicator in the footer if it is not fetching', () => {
      const notes = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      const tree = shallow(
        <Notes
          back={back}
          getNotesByContact={getNotesByContact}
          isFetching={false}
          notes={notes as any}
        />
      );
      expect(tree.instance().renderFooter()).toBeNull();
    });

    it('should have a keyExtractor', () => {
      const notes = [{id: 1}, {id: 2}];
      const tree = shallow(
        <Notes
          back={back}
          getNotesByContact={getNotesByContact}
          isFetching={false}
          notes={notes as any}
        />
      );
      expect(tree.instance().keyExtractor(notes[0])).toBe('1');
      expect(tree.instance().keyExtractor(notes[1])).toBe('2');
    });
  });
});
