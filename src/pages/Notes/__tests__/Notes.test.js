import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
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
      expect(
        toJson(
          shallow(
            <Notes
              back={back}
              getNotesByContact={getNotesByContact}
              isFetching={true}
              notes={notes}
            />,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('should renders correctly without notes and not fetching', () => {
      const notes = [];
      expect(
        toJson(
          shallow(
            <Notes
              back={back}
              getNotesByContact={getNotesByContact}
              isFetching={false}
              notes={notes}
            />,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('should renders correctly with notes and fetching', () => {
      const notes = [{body: 'My body', created_at: '1991-12-17'}];
      expect(
        toJson(
          shallow(
            <Notes
              back={back}
              getNotesByContact={getNotesByContact}
              isFetching={true}
              notes={notes}
            />,
          ),
        ),
      ).toMatchSnapshot();
    });

    it('should renders correctly with notes and fetching', () => {
      const notes = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      expect(
        toJson(
          shallow(
            <Notes
              back={back}
              getNotesByContact={getNotesByContact}
              isFetching={false}
              notes={notes}
            />,
          ),
        ),
      ).toMatchSnapshot();
    });
  });
});
