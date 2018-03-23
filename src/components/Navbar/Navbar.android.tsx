import React, {PureComponent} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {commonStyles} from '@theme';
import {INavbarProps} from './Navbar.props';

const actions = [
  {title: 'Close', iconName: 'close', iconSize: 30, show: 'always'},
];

export class Navbar extends PureComponent<INavbarProps> {
  public onActionSelected = () => {
    this.props.onBack();
  };

  public render() {
    const {onBack, title} = this.props;

    return (
      <Icon.ToolbarAndroid
        logo={require('@assets/logo.png')}
        title={'  ' + title}
        titleColor="white"
        onActionSelected={this.onActionSelected}
        style={commonStyles.toolbarAndroid}
        actions={onBack && actions}
      />
    );
  }
}
