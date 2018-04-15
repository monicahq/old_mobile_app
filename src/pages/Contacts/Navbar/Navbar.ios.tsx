import React, {PureComponent} from 'react';
import {Image} from 'react-native';
import NavigationBar from 'react-native-navbar';
import SearchBar from 'react-native-search-bar';

import {I18n} from '@i18n';

import {NetworkStatusContainer} from '@containers/NetworkStatus';
import {navbarColor, statusBarLightContent} from '@theme';
import {INavbarProps} from './Navbar.props';
import {styles} from './Navbar.styles';

export class Navbar extends PureComponent<INavbarProps, {}> {
  public render() {
    return [
      <NavigationBar
        key={0}
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
            style={styles.searchBar}
          />
        }
        rightButton={<NetworkStatusContainer />}
        tintColor={navbarColor}
        statusBar={statusBarLightContent}
      />,
    ];
  }
}
