import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {Checkbox, EmptyActivity, Navbar} from '@components';
import {ITask} from '@models';
import {IRouterBackOperation} from '@redux/router';
import {commonStyles} from '@theme';
import {styles} from './Tasks.styles';

interface ITasksProps {
  back: IRouterBackOperation;
  getTasksByContact: () => void;
  tasks: ITask[];
  isFetching: boolean;
}

export class Tasks extends PureComponent<ITasksProps, {}> {
  public componentWillMount() {
    this.props.getTasksByContact();
  }

  public keyExtractor = (item, index) => String(item.id);

  public renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.activityIndicator} size="large" />
    );
  };

  public renderItem = ({item, index}) => {
    const {tasks} = this.props;
    const task = tasks[index];

    return (
      <View style={styles.taskContainer}>
        <Checkbox checked={task.completed} />
        <View style={styles.textContainer}>
          <Text>{task.title}</Text>
          {task.description && (
            <Text style={styles.descriptionText}>{task.description}</Text>
          )}
        </View>
      </View>
    );
  };

  public render() {
    const {back, tasks, getTasksByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Tasks" onBack={back} />
        {isFetching || tasks.length ? (
          <FlatList
            data={tasks}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
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
