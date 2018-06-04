import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {ContactListItem, EmptyActivity} from '@components';
import {I18n} from '@i18n';
import {IContact} from '@models';
import {
  IContactsGetOperation,
  IContactsSearchOperation,
} from '@models/operations';
import {appScreensStyles, commonStyles} from '@theme';
import {styles} from './Contacts.styles';
import {Navbar} from './Navbar/Navbar';

interface IContactsProps {
  contacts: IContact[];
  isFetching: boolean;
  isSearching: boolean;
  count: number;
  getContacts: IContactsGetOperation;
  searchContacts: IContactsSearchOperation;
  onPress: (...args) => any;
  onBack?: (...args) => any;
  title?: string;
}

export class Contacts extends PureComponent<IContactsProps, {}> {
  public keyExtractor = (item, index) => String(item.id);

  public renderItem = ({item, index}) => {
    const {contacts, onPress} = this.props;
    const contact = contacts[index];
    return (
      <ContactListItem
        bgOddRow={index % 2 === 1}
        contact={contact}
        onPress={onPress(contact)}
      />
    );
  };

  public renderHeader = () => {
    const {count, title} = this.props;

    if (title) {
      return (
        <View style={[styles.header, styles.headerCentered]}>
          <Text>{title}</Text>
        </View>
      );
    }

    if (!count) {
      return null;
    }

    return (
      <View style={styles.header}>
        <Text style={commonStyles.mutedText}>
          {I18n.t('contacts:countHeader.before', {count})}{' '}
        </Text>
        <Text>{count}</Text>
        <Text style={commonStyles.mutedText}>
          {' '}
          {I18n.t('contacts:countHeader.after', {count})}.
        </Text>
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
    const {contacts, getContacts, isFetching} = this.props;

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

  // public componentWillReceiveProps(nextProps) {
  //   if (this.props.contacts.length === 0 && nextProps.contacts.length) {
  //     this.props.onPress(nextProps.contacts[0])();
  //   }
  // }

  public render() {
    const {contacts, isFetching, isSearching, onBack} = this.props;

    const emptyTitle = isSearching
      ? I18n.t('contacts:none')
      : I18n.t('contacts:addOne');

    const emptyImage = isSearching
      ? require('./assets/no-results.png')
      : require('./assets/no-contacts.png');

    return (
      <View style={appScreensStyles.container}>
        <Navbar
          onSearchTextChanged={this.onSearchTextChanged}
          onBack={onBack}
        />
        {isFetching || contacts.length ? (
          <FlatList
            data={contacts}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.5}
            keyboardDismissMode="on-drag"
          />
        ) : (
          <EmptyActivity image={emptyImage} title={emptyTitle} />
        )}
      </View>
    );
  }
}
