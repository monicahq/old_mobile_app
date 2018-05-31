import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {TasksList} from '../TasksList';

describe('Pages', () => {
  describe('Tasks', () => {
    let pop;
    let getTasksByContact;

    beforeEach(() => {
      pop = jest.fn();
      getTasksByContact = jest.fn();
    });

    it('should renders correctly without tasks and fetching', () => {
      const tasks = [];
      const tree = shallow(
        <TasksList
          pop={pop}
          getTasksByContact={getTasksByContact}
          isFetching={true}
          tasks={tasks}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly without tasks and not fetching', () => {
      const tasks = [];
      const tree = shallow(
        <TasksList
          pop={pop}
          getTasksByContact={getTasksByContact}
          isFetching={false}
          tasks={tasks}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
    });

    it('should renders correctly with tasks and fetching', () => {
      const tasks = [{title: 'My title', completed: false}];
      const tree = shallow(
        <TasksList
          pop={pop}
          getTasksByContact={getTasksByContact}
          isFetching={true}
          tasks={tasks as any}
        />
      );
      expect(toJson(tree)).toMatchSnapshot();
      expect(
        toJson(shallow(tree.instance().renderItem({index: 0})))
      ).toMatchSnapshot();
    });

    it('should renders correctly with tasks and fetching', () => {
      const tasks = [
        {title: 'My title', completed: false},
        {title: 'My title 2', completed: true, description: 'My desc'},
      ];
      const tree = shallow(
        <TasksList
          pop={pop}
          getTasksByContact={getTasksByContact}
          isFetching={false}
          tasks={tasks as any}
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

    it('should display the task indicator in the footer if it is fetching', () => {
      const tasks = [
        {title: 'My title', completed: false},
        {title: 'My title 2', completed: false, description: 'My desc'},
      ];
      const tree = shallow(
        <TasksList
          pop={pop}
          getTasksByContact={getTasksByContact}
          isFetching={true}
          tasks={tasks as any}
        />
      );
      expect(toJson(shallow(tree.instance().renderFooter()))).toMatchSnapshot();
    });

    it('should not display the task indicator in the footer if it is not fetching', () => {
      const tasks = [
        {title: 'My title', completed: false},
        {title: 'My title 2', completed: true, description: 'My desc'},
      ];
      const tree = shallow(
        <TasksList
          pop={pop}
          getTasksByContact={getTasksByContact}
          isFetching={false}
          tasks={tasks as any}
        />
      );
      expect(tree.instance().renderFooter()).toBeNull();
    });

    it('should have a keyExtractor', () => {
      const tasks = [{id: 1}, {id: 2}];
      const tree = shallow(
        <TasksList
          pop={pop}
          getTasksByContact={getTasksByContact}
          isFetching={false}
          tasks={tasks as any}
        />
      );
      expect(tree.instance().keyExtractor(tasks[0])).toBe('1');
      expect(tree.instance().keyExtractor(tasks[1])).toBe('2');
    });
  });
});
