import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';

import {Navbar, EmptyActivity} from 'components';
import {commonStyles} from 'theme';

export class Reminders extends Component {
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

  renderItem = ({item, index}) => {
    // const {reminders} = this.props;
    // const reminder = reminders[index];

    return <Text>Text {index}</Text>;
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
