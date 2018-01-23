import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from 'react-native-searchbar';

import {commonStyles} from 'theme';

const actions = [
  {title: 'Search', iconName: 'search', iconSize: 30, show: 'always'},
];

export class Navbar extends PureComponent {
  static propTypes = {
    onSearchTextChanged: PropTypes.func.isRequired,
  };

  onActionSelected = () => {
    this.searchBar.show();
  };
  onBack = () => {
    this.searchBar.hide();
    this.props.onSearchTextChanged('');
  };
  hide = () => {
    this.searchBar.hide();
  };
  searchBarRef = ref => {
    this.searchBar = ref;
  };
  render() {
    return [
      <Icon.ToolbarAndroid
        logo={require('assets/logo.png')}
        key={0}
        title="  Contacts"
        titleColor="white"
        onActionSelected={this.onActionSelected}
        style={commonStyles.toolbarAndroid}
        actions={actions}
      />,
      <SearchBar
        key={1}
        ref={this.searchBarRef}
        placeholder="Search your contacts..."
        onBlur={this.hide}
        handleSearch={this.props.onSearchTextChanged}
        onBack={this.onBack}
      />,
    ];
  }
}
