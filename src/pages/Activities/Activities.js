import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';

import {
  Navbar,
  EmptyActivity,
  LastTwoYearsStatistics,
  YearChart,
} from 'components';
import {commonStyles} from 'theme';
import {styles} from './Activities.styles';

export class Activities extends PureComponent {
  static propTypes = {
    back: PropTypes.func.isRequired,
    getActivitiesByContact: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    activities: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.getActivitiesByContact();
  }

  keyExtractor = (item, index) => String(item.id);

  renderHeader = () => {
    const {isFetching} = this.props;

    if (isFetching) {
      return null;
    }

    return (
      <View style={styles.headerContainer}>
        <LastTwoYearsStatistics
          image={require('assets/icons/activities.png')}
          title1="in 2017"
          count1={3}
          title2="in 2016"
          count2={6}
        />

        <YearChart />
      </View>
    );
  };

  renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.activityIndicator} size="large" />
    );
  };

  renderItem = ({item, index}) => {
    const {activities} = this.props;
    const activity = activities[index];

    return (
      <View style={styles.activityContainer}>
        <View style={commonStyles.row}>
          <Text style={styles.textLeft}>Activity</Text>
          <View style={commonStyles.flex} />
          <Text style={styles.textRight}>
            {moment(activity.date_it_happened).fromNow()}
          </Text>
        </View>
        {activity.description && (
          <Text style={styles.textInfo}>{activity.description}</Text>
        )}
      </View>
    );
  };

  render() {
    const {
      back,
      activities,
      getActivitiesByContact,
      isFetching,
      contact,
    } = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Activities" onBack={back} />
        {isFetching || activities.length ? (
          <FlatList
            data={activities}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={getActivitiesByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-activities.png')}
            title={
              'Have you done an activity with ' +
              contact.first_name +
              ' lately?'
            }
            subtitle="Keep track of what you’ve done."
          />
        )}
      </View>
    );
  }
}
