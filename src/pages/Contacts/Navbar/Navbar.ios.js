import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import NavigationBar from 'react-native-navbar';
import SearchBar from 'react-native-search-bar';

import {styles} from './Navbar.styles';
import {navbarColor} from 'theme';

const lightContent = {style: 'light-content'};

export class Navbar extends PureComponent {
  static propTypes = {
    onSearchTextChanged: PropTypes.func.isRequired,
  };
  render() {
    return (
      <NavigationBar
        leftButton={
          <Image
            source={require('assets/logo.png')}
            style={styles.navbarLogo}
          />
        }
        title={
          <SearchBar
            placeholder="Search your contacts"
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
        statusBar={lightContent}
      />
    );
  }
}
