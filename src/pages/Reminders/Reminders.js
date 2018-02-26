import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import moment from 'moment';

import {Navbar, EmptyActivity} from 'components';
import {commonStyles} from 'theme';
import {styles} from './Reminders.styles';

export class Reminders extends PureComponent {
  static propTypes = {
    back: PropTypes.func.isRequired,
    getRemindersByContact: PropTypes.func.isRequired,
    reminders: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.getRemindersByContact();
  }

  keyExtractor = (item, index) => String(item.id);

  renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.reminderIndicator} size="large" />
    );
  };

  getFrequencyLabel(type) {
    if (type === 'year') {
      return 'every year';
    }
    if (type === 'month') {
      return 'every month';
    }
    if (type === 'day') {
      return 'every day';
    }
    if (type === 'one_time') {
      return 'one time';
    }
  }

  renderItem = ({item, index}) => {
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
                {this.getFrequencyLabel(reminder.frequency_type)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const {back, reminders, getRemindersByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Reminders" onBack={back} />
        {isFetching || reminders.length ? (
          <FlatList
            data={reminders}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={getRemindersByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-reminders.png')}
            title="Be reminded at the right time, for things that matter."
            subtitle="Your memory might let you down - we won’t."
          />
        )}
      </View>
    );
  }
}
