import React, {PureComponent} from 'react';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {NetworkStatusContainer} from '@containers/NetworkStatus';
import {I18n} from '@i18n';
import {commonStyles} from '@theme';
import {INavbarProps} from './Navbar.props';

const actions = [
  {
    title: I18n.t('common:search'),
    iconName: 'search',
    iconSize: 30,
    show: 'always',
  },
];

export class Navbar extends PureComponent<INavbarProps, {}> {
  private searchBar;

  public onActionSelected = () => {
    this.searchBar.show();
  };
  public onBack = () => {
    this.searchBar.hide();
    this.props.onSearchTextChanged('');
  };
  public hide = () => {
    this.searchBar.hide();
  };
  public searchBarRef = ref => {
    this.searchBar = ref;
  };
  public render() {
    return [
      <Icon.ToolbarAndroid
        logo={require('@assets/logo.png')}
        key={0}
        title={'  ' + I18n.t('contacts:contacts')}
        titleColor="white"
        onActionSelected={this.onActionSelected}
        style={commonStyles.toolbarAndroid}
        actions={actions}
      />,
      <SearchBar
        key={1}
        ref={this.searchBarRef}
        placeholder={I18n.t('contacts:search')}
        onBlur={this.hide}
        handleSearch={this.props.onSearchTextChanged}
        onBack={this.onBack}
      />,
      <NetworkStatusContainer key={2} />,
    ];
  }
}
