import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {CallsList} from '../CallsList';

describe('Pages', () => {
  describe('CallsList', () => {
    let pop;
    let getCallsByContact;

    beforeEach(() => {
      pop = jest.fn();
      getCallsByContact = jest.fn();
    });

    it('should renders correctly without calls and fetching', () => {
      const calls = [];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={true}
          calls={calls}
          statistics={statistics}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly without calls and not fetching', () => {
      const calls = [];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={false}
          calls={calls}
          statistics={statistics}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly with calls and fetching', () => {
      const calls = [
        {called_at: '2016-10-07T21:00:56Z', content: 'My content'},
        {called_at: '2016-08-07T21:00:56Z', content: 'My content 2'},
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={true}
          calls={calls as any}
          statistics={statistics}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
      expect(
        toJson(shallow(tree.instance().renderItem({index: 0})))
      ).toMatchSnapshot();
    });

    it('should renders correctly with calls and fetching', () => {
      const calls = [
        {called_at: '2016-10-07T21:00:56Z', content: 'My content'},
        {called_at: '2016-08-07T21:00:56Z', content: 'My content 2'},
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={false}
          calls={calls as any}
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

    it('should display the loading indicator in the footer if it is fetching', () => {
      const calls = [
        {called_at: '2016-10-07T21:00:56Z', content: 'My content'},
        {called_at: '2016-08-07T21:00:56Z', content: 'My content 2'},
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={true}
          calls={calls as any}
          statistics={statistics}
        />
      );
      expect(toJson(shallow(tree.instance().renderFooter()))).toMatchSnapshot();
    });

    it('should not display the loading indicator in the footer if it is not fetching', () => {
      const calls = [
        {called_at: '2016-10-07T21:00:56Z', content: 'My content'},
        {called_at: '2016-08-07T21:00:56Z', content: 'My content 2'},
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={false}
          calls={calls as any}
          statistics={statistics}
        />
      );
      expect(tree.instance().renderFooter()).toBeNull();
    });

    it('should not display the header if it is fetching', () => {
      const calls = [
        {called_at: '2016-10-07T21:00:56Z', content: 'My content'},
        {called_at: '2016-08-07T21:00:56Z', content: 'My content 2'},
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={true}
          calls={calls as any}
          statistics={statistics}
        />
      );
      expect(tree.instance().renderHeader()).toBeNull();
    });

    it('should display the header if it is not fetching', () => {
      const calls = [
        {called_at: '2016-10-07T21:00:56Z', content: 'My content'},
        {called_at: '2016-08-07T21:00:56Z', content: 'My content 2'},
      ];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={false}
          calls={calls as any}
          statistics={statistics}
        />
      );
      expect(toJson(shallow(tree.instance().renderHeader()))).toMatchSnapshot();
    });

    it('should have a keyExtractor', () => {
      const calls = [{id: 1}, {id: 2}];
      const statistics = {'2018': 100, '2015': 1};
      const tree = shallow(
        <CallsList
          pop={pop}
          getCallsByContact={getCallsByContact}
          isFetching={false}
          calls={calls as any}
          statistics={statistics}
        />
      );
      expect(tree.instance().keyExtractor(calls[0])).toBe('1');
      expect(tree.instance().keyExtractor(calls[1])).toBe('2');
    });
  });
});
