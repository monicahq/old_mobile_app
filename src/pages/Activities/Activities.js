import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';

import {Navbar, EmptyActivity} from 'components';
import {commonStyles} from 'theme';

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
    // const {activities} = this.props;
    // const activity = activities[index];

    return <Text>Text {index}</Text>;
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
