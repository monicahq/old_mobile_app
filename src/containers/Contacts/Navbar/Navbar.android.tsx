import React, {PureComponent} from 'react';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    const {onBack} = this.props;
    const title = I18n.t('contacts:contacts');
    return [
      <Icon.ToolbarAndroid
        key={0}
        logo={!onBack ? require('@assets/logo.png') : undefined}
        navIconName={onBack && 'arrow-back'}
        onIconClicked={onBack}
        title={onBack ? title : `  ${title}`}
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
    ];
  }
}
