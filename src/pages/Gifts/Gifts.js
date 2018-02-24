import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';

import {Navbar, EmptyActivity} from 'components';
import {commonStyles} from 'theme';

export class Gifts extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
    getGiftsByContact: PropTypes.func.isRequired,
    gifts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.getGiftsByContact();
  }

  keyExtractor = (item, index) => String(item.id);

  renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.giftIndicator} size="large" />
    );
  };

  renderItem = ({item, index}) => {
    // const {gifts} = this.props;
    // const gift = gifts[index];

    return <Text>Text {index}</Text>;
  };

  render() {
    const {back, gifts, getGiftsByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Gifts" onBack={back} />
        {isFetching || gifts.length ? (
          <FlatList
            data={gifts}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={getGiftsByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-gifts.png')}
            title="Is there a better way to show how much you appreciate someone than to offer a gift?"
            subtitle="Yes, there is. But a gift is still a nice touch."
          />
        )}
      </View>
    );
  }
}
