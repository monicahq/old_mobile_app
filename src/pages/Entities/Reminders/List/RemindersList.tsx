import moment from 'moment';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {EmptyActivity, Navbar} from '@components';
import {I18n} from '@i18n';
import {IReminder} from '@models';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles} from '@theme';
import {styles} from './RemindersList.styles';

interface IRemindersListProps {
  pop: IPopAction;
  getRemindersByContact: () => void;
  reminders: IReminder[];
  isFetching: boolean;
}

export class RemindersList extends PureComponent<IRemindersListProps, {}> {
  public componentWillMount() {
    this.props.getRemindersByContact();
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
    const {reminders} = this.props;
    const reminder = reminders[index];

    const nextDate = moment(reminder.next_expected_date);

    return (
      <View style={styles.reminderContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{nextDate.format('MMM DD')}</Text>
          <Text style={styles.dateYear}>{nextDate.format('YYYY')}</Text>
        </View>

        <View style={commonStyles.flex}>
          <Text>{reminder.title}</Text>
          {reminder.description ? (
            <Text style={styles.descriptionText}>{reminder.description}</Text>
          ) : null}

          <View style={commonStyles.row}>
            <Text style={styles.descriptionText}>{nextDate.fromNow()}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {I18n.t('reminders:frequency.' + reminder.frequency_type)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  public render() {
    const {pop, reminders, getRemindersByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title={I18n.t('reminders:reminders')} onBack={pop} />
        {isFetching || reminders.length ? (
          <FlatList
            data={reminders}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListFooterComponent={this.renderFooter}
            onEndReached={getRemindersByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-reminders.png')}
            title={I18n.t('reminders:emptyTitle')}
            subtitle={I18n.t('reminders:emptySubtitle')}
          />
        )}
      </View>
    );
  }
}
