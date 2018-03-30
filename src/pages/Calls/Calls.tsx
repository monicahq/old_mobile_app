import moment from 'moment';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {EmptyActivity, LastTwoYearsStatistics, Navbar} from '@components';
import {I18n} from '@i18n';
import {ICall} from '@src/models';
import {IRouterBackOperation} from '@src/redux/router';
import {commonStyles} from '@theme';
import {styles} from './Calls.styles';

interface ICallsProps {
  back: IRouterBackOperation;
  getCallsByContact: () => void;
  calls: ICall[];
  isFetching: boolean;
}

export class Calls extends PureComponent<ICallsProps, {}> {
  public componentWillMount() {
    this.props.getCallsByContact();
  }

  public keyExtractor = (item, index) => String(item.id);

  public renderHeader = () => {
    const {isFetching} = this.props;

    if (isFetching) {
      return null;
    }

    return (
      <View style={styles.headerContainer}>
        <LastTwoYearsStatistics
          image={require('@assets/icons/phone.png')}
          title1={I18n.t('common:yearDisplay', {year: 2017})}
          count1={3}
          title2={I18n.t('common:yearDisplay', {year: 2016})}
          count2={6}
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
    const {calls} = this.props;
    const call = calls[index];

    return (
      <View style={styles.callContainer}>
        <View style={commonStyles.row}>
          <Text style={styles.textLeft}>You called</Text>
          <View style={commonStyles.flex} />
          <Text style={styles.textRight}>
            {moment(call.called_at).fromNow()}
          </Text>
        </View>
        {call.content && <Text style={styles.textInfo}>{call.content}</Text>}
      </View>
    );
  };

  public render() {
    const {back, calls, getCallsByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title={I18n.t('calls:calls')} onBack={back} />
        {isFetching || calls.length ? (
          <FlatList
            data={calls}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={getCallsByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-calls.png')}
            title={I18n.t('calls:emptyTitle')}
            subtitle={I18n.t('calls:emptySubtitle')}
          />
        )}
      </View>
    );
  }
}
