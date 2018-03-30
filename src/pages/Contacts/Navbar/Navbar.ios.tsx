import React, {PureComponent} from 'react';
import {Image} from 'react-native';
import NavigationBar from 'react-native-navbar';
import SearchBar from 'react-native-search-bar';

import {I18n} from '@i18n';
import {navbarColor, statusBarLightContent} from '@theme';
import {INavbarProps} from './Navbar.props';
import {styles} from './Navbar.styles';

export class Navbar extends PureComponent<INavbarProps, {}> {
  public render() {
    return (
      <NavigationBar
        leftButton={
          <Image
            source={require('@assets/logo.png')}
            style={styles.navbarLogo}
          />
        }
        title={
          <SearchBar
            placeholder={I18n.t('contacts:search')}
            hideBackground={true}
            showsCancelButtonWhileEditing={false}
            autoCapitalize="words"
            searchBarStyle="minimal"
            textColor="#ACACAC"
            onChangeText={this.props.onSearchTextChanged}
            // @ts-ignore: TODO wait for PR to be accepted and push to npm https://github.com/umhan35/react-native-search-bar/pull/147
            style={styles.searchBar}
          />
        }
        tintColor={navbarColor}
        statusBar={statusBarLightContent}
      />
    );
  }
}
