import moment from 'moment';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {EmptyActivity, LastTwoYearsStatistics, Navbar} from '@components';
import {I18n} from '@i18n';
import {IActivity, IContact, IMetaStatistics} from '@models';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles} from '@theme';
import {styles} from './ActivitiesList.styles';

interface IActivitiesListProps {
  pop: IPopAction; // TODO: fix this
  getActivitiesByContact: () => void;
  contact: IContact;
  activities: IActivity[];
  isFetching: boolean;
  statistics: IMetaStatistics;
}

export class ActivitiesList extends PureComponent<IActivitiesListProps, {}> {
  public componentWillMount() {
    this.props.getActivitiesByContact();
  }

  public keyExtractor = (item, index) => String(item.id);

  public renderHeader = () => {
    const {isFetching, statistics} = this.props;

    if (isFetching) {
      return null;
    }

    const keys = Object.keys(statistics).reverse();

    return (
      <View style={styles.headerContainer}>
        <LastTwoYearsStatistics
          image={require('@assets/icons/activities.png')}
          title1={I18n.t('common:yearDisplay', {year: keys[0]})}
          count1={statistics[keys[0]]}
          title2={I18n.t('common:yearDisplay', {year: keys[1]})}
          count2={statistics[keys[1]]}
        />
      </View>
    );
  };

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
    const {activities} = this.props;
    const activity = activities[index];

    return (
      <View style={styles.activityContainer}>
        <View style={commonStyles.row}>
          <Text style={styles.textLeft}>{activity.summary}</Text>
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

  public render() {
    const {
      pop,
      activities,
      getActivitiesByContact,
      isFetching,
      contact,
    } = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title={I18n.t('activities:activities')} onBack={pop} />
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
            title={I18n.t('activities:emptyTitle', {name: contact.first_name})}
            subtitle={I18n.t('activities:emptySubtitle')}
          />
        )}
      </View>
    );
  }
}
