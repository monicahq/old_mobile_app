import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';

import {Navbar, EmptyActivity, Checkbox} from 'components';
import {commonStyles} from 'theme';
import {styles} from './Tasks.styles';

export class Tasks extends PureComponent {
  static propTypes = {
    back: PropTypes.func.isRequired,
    getTasksByContact: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.getTasksByContact();
  }

  keyExtractor = (item, index) => String(item.id);

  renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.taskIndicator} size="large" />
    );
  };

  renderItem = ({item, index}) => {
    const {tasks} = this.props;
    const task = tasks[index];

    return (
      <View style={styles.taskContainer}>
        <Checkbox checked={task.completed} />
        <View style={[styles.flex, {paddingLeft: 15, paddingRight: 30}]}>
          <Text>{task.title}</Text>
          {task.description && (
            <Text style={styles.descriptionText}>{task.description}</Text>
          )}
        </View>
      </View>
    );
  };

  render() {
    const {back, tasks, getTasksByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Tasks" onBack={back} />
        {isFetching || tasks.length ? (
          <FlatList
            data={tasks}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={getTasksByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-tasks.png')}
            title="You have no excuses not to be multitask anymore."
            subtitle="Let Monica manage stuff for you."
          />
        )}
      </View>
    );
  }
}
