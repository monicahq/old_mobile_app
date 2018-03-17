import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {ContactListItem, EmptyActivity} from 'components';
import {Navbar} from './Navbar/Navbar';
import {commonStyles} from 'theme';
import {styles} from './Contacts.styles';

export class Contacts extends PureComponent {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isSearching: PropTypes.bool.isRequired,
    count: PropTypes.number,
    getContacts: PropTypes.func.isRequired,
    navigateToContact: PropTypes.func.isRequired,
    searchContacts: PropTypes.func.isRequired,
  };

  keyExtractor = (item, index) => String(item.id);

  renderItem = ({item, index}) => {
    const {contacts, navigateToContact} = this.props;
    const contact = contacts[index];
    return (
      <ContactListItem
        bgOddRow={index % 2 === 1}
        contact={contact}
        onPress={navigateToContact(contact.id)}
      />
    );
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

  renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.activityIndicator} size="large" />
    );
  };

  componentWillMount() {
    const {contacts, getContacts, isFetching, searchContacts} = this.props;
    // reset search
    searchContacts('');

    if (!contacts.length && !isFetching) {
      getContacts();
    }
  }

  onSearchTextChanged = query => {
    const {searchContacts} = this.props;
    searchContacts(query);
  };

  onEndReached = () => {
    const {isSearching, getContacts, searchContacts} = this.props;

    if (isSearching) {
      searchContacts();
    } else {
      getContacts();
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.contacts.length === 0 && nextProps.contacts.length) {
      this.props.navigateToContact(nextProps.contacts[0].id)();
    }
  }

  render() {
    const {contacts, isFetching, isSearching} = this.props;

    const title = isSearching
      ? 'No contact found.'
      : 'To add your first contact, use the “+” button below.';

    return (
      <View style={commonStyles.flex}>
        <Navbar onSearchTextChanged={this.onSearchTextChanged} />
        {isFetching || contacts.length ? (
          <FlatList
            data={contacts}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/no-contacts.png')}
            title={title}
          />
        )}
      </View>
    );
  }
}
