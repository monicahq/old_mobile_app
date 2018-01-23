import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {ContactListItem} from 'components';
import {Navbar} from './Navbar/Navbar';
import {commonStyles} from 'theme';
import {styles} from './Contacts.styles';

export class Contacts extends PureComponent {
  static propTypes = {
    getContacts: PropTypes.func.isRequired,
    contacts: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchedPageCount: PropTypes.number.isRequired,
    count: PropTypes.number,
    navigateToContact: PropTypes.func.isRequired,
  };

  keyExtractor = (item, index) => item;

  renderItem = ({item}) => {
    const {contacts, navigateToContact} = this.props;
    const contact = contacts[item];

    return <ContactListItem contact={contact} onPress={navigateToContact} />;
  };

  renderHeader = () => {
    const {count} = this.props;

    if (!count) {
      return null;
    }

    return (
      <View style={styles.header}>
        <Text style={commonStyles.mutedText}>You have </Text>
        <Text>{count}</Text>
        <Text style={commonStyles.mutedText}> contacts.</Text>
      </View>
    );
  };

  componentWillMount() {
    const {list, getContacts, isFetching} = this.props;
    if (!list.length && !isFetching) {
      getContacts();
    }
  }

  onSearchTextChanged = text => {
    console.warn(text);
  };

  onEndReached = () => {
    this.props.getContacts();
  };

  onRefresh = () => {
    this.props.getContacts(true);
  };

  render() {
    const {list, isFetching, fetchedPageCount} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar onSearchTextChanged={this.onSearchTextChanged} />
        {list.length ? (
          <FlatList
            data={list}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.5}
            onRefresh={this.onRefresh}
            refreshing={fetchedPageCount === 1 && isFetching}
          />
        ) : null}
        {isFetching && (
          <ActivityIndicator
            style={commonStyles.activityIndicator}
            size="large"
          />
        )}
      </View>
    );
  }
}
