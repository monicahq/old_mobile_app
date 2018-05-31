import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {Checkbox, EmptyActivity, Navbar} from '@components';
import {I18n} from '@i18n';
import {ITask} from '@models';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles} from '@theme';
import {styles} from './TasksList.styles';

interface ITasksListProps {
  pop: IPopAction;
  getTasksByContact: () => void;
  tasks: ITask[];
  isFetching: boolean;
}

export class TasksList extends PureComponent<ITasksListProps, {}> {
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
    const {pop, tasks, getTasksByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title={I18n.t('tasks:tasks')} onBack={pop} />
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
            title={I18n.t('tasks:emptyTitle')}
            subtitle={I18n.t('tasks:emptySubtitle')}
          />
        )}
      </View>
    );
  }
}
