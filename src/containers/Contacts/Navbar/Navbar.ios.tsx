import {NavbarIOSBack} from '@components';
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
        style={styles.navbar}
        leftButton={this.getLeftButton()}
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
        tintColor={navbarColor}
        statusBar={statusBarLightContent}
      />
    );
  }

  private getLeftButton() {
    const {onBack} = this.props;

    if (onBack) {
      return <NavbarIOSBack onPress={onBack} />;
    }

    return (
      <Image source={require('@assets/logo.png')} style={styles.navbarLogo} />
    );
  }
}
