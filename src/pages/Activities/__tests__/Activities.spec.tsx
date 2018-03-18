import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {Activities} from '../Activities';

describe('Pages', () => {
  describe('Activities', () => {
    let back;
    let getActivitiesByContact;
    const contact = {first_name: 'Theo'};

    beforeEach(() => {
      back = jest.fn();
      getActivitiesByContact = jest.fn();
    });

    it('should renders correctly without activities and fetching', () => {
      const activities = [];
      const tree = shallow(
        <Activities
          contact={contact as any}
          back={back}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={true}
          activities={activities}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly without activities and not fetching', () => {
      const activities = [];
      const tree = shallow(
        <Activities
          back={back}
          contact={contact as any}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly with activities and fetching', () => {
      const activities = [
        {description: 'My description', date_it_happened: '1991-12-17'},
      ];
      const tree = shallow(
        <Activities
          contact={contact as any}
          back={back}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={true}
          activities={activities as any}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
      expect(
        toJson(shallow(tree.instance().renderItem({index: 0})))
      ).toMatchSnapshot();
    });

    it('should renders correctly with activities and fetching', () => {
      const activities = [
        {description: 'My description', date_it_happened: '1991-12-17'},
        {description: 'My description 2', date_it_happened: '1993-12-17'},
      ];
      const tree = shallow(
        <Activities
          contact={contact as any}
          back={back}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities as any}
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
      const activities = [
        {description: 'My description', date_it_happened: '1991-12-17'},
        {description: 'My description 2', date_it_happened: '1993-12-17'},
      ];
      const tree = shallow(
        <Activities
          contact={contact as any}
          back={back}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={true}
          activities={activities as any}
        />
      );
      expect(toJson(shallow(tree.instance().renderFooter()))).toMatchSnapshot();
    });

    it('should not display the activity indicator in the footer if it is not fetching', () => {
      const activities = [
        {description: 'My description', date_it_happened: '1991-12-17'},
        {description: 'My description 2', date_it_happened: '1993-12-17'},
      ];
      const tree = shallow(
        <Activities
          contact={contact as any}
          back={back}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities as any}
        />
      );
      expect(tree.instance().renderFooter()).toBeNull();
    });

    it('should have a keyExtractor', () => {
      const activities = [{id: 1}, {id: 2}];
      const tree = shallow(
        <Activities
          contact={contact as any}
          back={back}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities as any}
        />
      );
      expect(tree.instance().keyExtractor(activities[0])).toBe('1');
      expect(tree.instance().keyExtractor(activities[1])).toBe('2');
    });
  });
});
