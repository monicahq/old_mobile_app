import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';

import {Navbar, EmptyActivity} from 'components';
import {commonStyles} from 'theme';

export class Calls extends PureComponent {
  static propTypes = {
    back: PropTypes.func.isRequired,
    getCallsByContact: PropTypes.func.isRequired,
    calls: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.getCallsByContact();
  }

  keyExtractor = (item, index) => String(item.id);

  renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.callIndicator} size="large" />
    );
  };

  renderItem = ({item, index}) => {
    // const {calls} = this.props;
    // const call = calls[index];

    return <Text>Text {index}</Text>;
  };

  render() {
    const {back, calls, getCallsByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Calls" onBack={back} />
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
            title="Enter details about phone calls you make."
            subtitle="So you can refer to it at a later time."
          />
        )}
      </View>
    );
  }
}
