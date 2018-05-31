import {connect} from 'react-redux';

import {pop} from '@navigator/NavigationService';
import {getTasksByContact} from '@redux/tasks';
import {TasksList} from './TasksList';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    tasks: (contact.tasks || []).map(taskId => state.tasks[taskId]),
    isFetching: state.getTasksByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  pop,
  getTasksByContact: () => dispatch(getTasksByContact(navigation.state.params)),
});

export const TasksListScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);
