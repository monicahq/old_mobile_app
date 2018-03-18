import {ContactListItem, EmptyActivity} from '@components';
import {IContact} from '@models';
import {
  IContactsGetOperation,
  IContactsSearchOperation,
} from '@models/operations';
import {commonStyles} from '@theme';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {styles} from './Contacts.styles';
import {Navbar} from './Navbar/Navbar';

interface IContactsProps {
  contacts: IContact[];
  isFetching: boolean;
  isSearching: boolean;
  count: number;
  getContacts: IContactsGetOperation;
  searchContacts: IContactsSearchOperation;
  navigateToContact: (contactId: number) => any;
}

export class Contacts extends PureComponent<IContactsProps, {}> {
  public keyExtractor = (item, index) => String(item.id);

  public renderItem = ({item, index}) => {
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

  public renderHeader = () => {
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

  public renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.activityIndicator} size="large" />
    );
  };

  public componentWillMount() {
    const {contacts, getContacts, isFetching, searchContacts} = this.props;
    // reset search
    searchContacts('');

    if (!contacts.length && !isFetching) {
      getContacts();
    }
  }

  public onSearchTextChanged = query => {
    const {searchContacts} = this.props;
    searchContacts(query);
  };

  public onEndReached = () => {
    const {isSearching, getContacts, searchContacts} = this.props;

    if (isSearching) {
      searchContacts();
    } else {
      getContacts();
    }
  };

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.contacts.length === 0 && nextProps.contacts.length) {
  //     this.props.navigateToContact(nextProps.contacts[0].id)();
  //   }
  // }

  public render() {
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
