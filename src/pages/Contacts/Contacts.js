import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {ContactListItem} from 'components';
import {Navbar} from './Navbar/Navbar';
import {commonStyles} from 'theme';
import {styles} from './Contacts.styles';

export class Contacts extends PureComponent {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    count: PropTypes.number,
    getContacts: PropTypes.func.isRequired,
    navigateToContact: PropTypes.func.isRequired,
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
    const {contacts, getContacts, isFetching} = this.props;
    if (!contacts.length && !isFetching) {
      getContacts();
    }
  }

  onSearchTextChanged = text => {
    console.warn(text);
  };

  onEndReached = () => {
    this.props.getContacts();
  };

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.contacts.length === 0 && nextProps.contacts.length) {
  //     this.props.navigateToContact(nextProps.contacts[0].id)();
  //   }
  // }

  render() {
    const {contacts} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar onSearchTextChanged={this.onSearchTextChanged} />
        <FlatList
          data={contacts}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}
