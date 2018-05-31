import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {ActivitiesList} from '../ActivitiesList';

describe('Pages', () => {
  describe('ActivitiesList', () => {
    let pop;
    let getActivitiesByContact;
    const contact = {first_name: 'Theo'};

    beforeEach(() => {
      pop = jest.fn();
      getActivitiesByContact = jest.fn();
    });

    it('should renders correctly without activities and fetching', () => {
      const activities = [];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <ActivitiesList
          contact={contact as any}
          pop={pop}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={true}
          activities={activities}
          statistics={statistics}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly without activities and not fetching', () => {
      const activities = [];
      const statistics = {};
      const tree = shallow(
        <ActivitiesList
          pop={pop}
          contact={contact as any}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities}
          statistics={statistics}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly with activities and fetching', () => {
      const activities = [
        {
          summary: 'Activity title',
          description: 'My description',
          date_it_happened: '1991-12-17',
        },
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <ActivitiesList
          contact={contact as any}
          pop={pop}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={true}
          activities={activities as any}
          statistics={statistics}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
      expect(
        toJson(shallow(tree.instance().renderItem({index: 0})))
      ).toMatchSnapshot();
    });

    it('should renders correctly with activities and fetching', () => {
      const activities = [
        {
          summary: 'Activity title',
          description: 'My description',
          date_it_happened: '1991-12-17',
        },
        {
          summary: 'Activity title 2',
          description: 'My description 2',
          date_it_happened: '1993-12-17',
        },
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <ActivitiesList
          contact={contact as any}
          pop={pop}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities as any}
          statistics={statistics}
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

    it('should not display the header if it is fetching', () => {
      const activities = [
        {
          summary: 'Activity title',
          description: 'My description',
          date_it_happened: '1991-12-17',
        },
        {
          summary: 'Activity title 2',
          description: 'My description 2',
          date_it_happened: '1993-12-17',
        },
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <ActivitiesList
          contact={contact as any}
          pop={pop}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={true}
          activities={activities as any}
          statistics={statistics}
        />
      );
      expect(tree.instance().renderHeader()).toBeNull();
    });

    it('should display the header if it is not fetching', () => {
      const activities = [
        {
          summary: 'Activity title',
          description: 'My description',
          date_it_happened: '1991-12-17',
        },
        {
          summary: 'Activity title 2',
          description: 'My description 2',
          date_it_happened: '1993-12-17',
        },
      ];
      const statistics = {'2017': 100, '2015': 20};
      const tree = shallow(
        <ActivitiesList
          contact={contact as any}
          pop={pop}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities as any}
          statistics={statistics}
        />
      );
      expect(toJson(shallow(tree.instance().renderHeader()))).toMatchSnapshot();
    });

    it('should display the activity indicator in the footer if it is fetching', () => {
      const activities = [
        {
          summary: 'Activity title',
          description: 'My description',
          date_it_happened: '1991-12-17',
        },
        {
          summary: 'Activity title 2',
          description: 'My description 2',
          date_it_happened: '1993-12-17',
        },
      ];
      const statistics = {'2017': 2300, '2015': 10};
      const tree = shallow(
        <ActivitiesList
          contact={contact as any}
          pop={pop}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={true}
          activities={activities as any}
          statistics={statistics}
        />
      );
      expect(toJson(shallow(tree.instance().renderFooter()))).toMatchSnapshot();
    });

    it('should not display the activity indicator in the footer if it is not fetching', () => {
      const activities = [
        {
          summary: 'Activity title',
          description: 'My description',
          date_it_happened: '1991-12-17',
        },
        {
          summary: 'Activity title 2',
          description: 'My description 2',
          date_it_happened: '1993-12-17',
        },
      ];
      const statistics = {'2020': 100, '2015': 20};
      const tree = shallow(
        <ActivitiesList
          contact={contact as any}
          pop={pop}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities as any}
          statistics={statistics}
        />
      );
      expect(tree.instance().renderFooter()).toBeNull();
    });

    it('should have a keyExtractor', () => {
      const activities = [{id: 1}, {id: 2}];
      const statistics = {'2017': 100, '2015': 20};
      const tree = shallow(
        <ActivitiesList
          contact={contact as any}
          pop={pop}
          getActivitiesByContact={getActivitiesByContact}
          isFetching={false}
          activities={activities as any}
          statistics={statistics}
        />
      );
      expect(tree.instance().keyExtractor(activities[0])).toBe('1');
      expect(tree.instance().keyExtractor(activities[1])).toBe('2');
    });
  });
});
