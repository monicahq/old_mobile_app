import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Reminders} from '../Reminders';

describe('Pages', () => {
  describe('Reminders', () => {
    let back;
    let getRemindersByContact;

    beforeEach(() => {
      back = jest.fn();
      getRemindersByContact = jest.fn();
    });

    it('should renders correctly without reminders and fetching', () => {
      const reminders = [];
      const tree = shallow(
        <Reminders
          back={back}
          getRemindersByContact={getRemindersByContact}
          isFetching={true}
          reminders={reminders}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly without reminders and not fetching', () => {
      const reminders = [];
      const tree = shallow(
        <Reminders
          back={back}
          getRemindersByContact={getRemindersByContact}
          isFetching={false}
          reminders={reminders}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly with reminders and fetching', () => {
      const reminders = [{body: 'My body', created_at: '1991-12-17'}];
      const tree = shallow(
        <Reminders
          back={back}
          getRemindersByContact={getRemindersByContact}
          isFetching={true}
          reminders={reminders as any}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
      expect(
        toJson(shallow(tree.instance().renderItem({index: 0})))
      ).toMatchSnapshot();
    });

    it('should renders correctly with reminders and fetching', () => {
      const reminders = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      const tree = shallow(
        <Reminders
          back={back}
          getRemindersByContact={getRemindersByContact}
          isFetching={false}
          reminders={reminders as any}
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

    it('should display the reminder indicator in the footer if it is fetching', () => {
      const reminders = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      const tree = shallow(
        <Reminders
          back={back}
          getRemindersByContact={getRemindersByContact}
          isFetching={true}
          reminders={reminders as any}
        />
      );
      expect(toJson(shallow(tree.instance().renderFooter()))).toMatchSnapshot();
    });

    it('should not display the reminder indicator in the footer if it is not fetching', () => {
      const reminders = [
        {body: 'My body', created_at: '1991-12-17'},
        {body: 'My body 2', created_at: '1993-12-17'},
      ];
      const tree = shallow(
        <Reminders
          back={back}
          getRemindersByContact={getRemindersByContact}
          isFetching={false}
          reminders={reminders as any}
        />
      );
      expect(tree.instance().renderFooter()).toBeNull();
    });

    it('should have a keyExtractor', () => {
      const reminders = [{id: 1}, {id: 2}];
      const tree = shallow(
        <Reminders
          back={back}
          getRemindersByContact={getRemindersByContact}
          isFetching={false}
          reminders={reminders as any}
        />
      );
      expect(tree.instance().keyExtractor(reminders[0])).toBe('1');
      expect(tree.instance().keyExtractor(reminders[1])).toBe('2');
    });
  });
});
