import React, {PureComponent} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {commonStyles} from '@theme';
import {INavbarProps} from './Navbar.props';

export class Navbar extends PureComponent<INavbarProps> {
  public render() {
    const {onBack, title} = this.props;

    return (
      <Icon.ToolbarAndroid
        logo={!onBack ? require('@assets/logo.png') : undefined}
        navIconName={onBack && 'arrow-back'}
        onIconClicked={onBack}
        title={onBack ? title : `  ${title}`}
        titleColor="white"
        onActionSelected={this.onActionSelected}
        style={commonStyles.toolbarAndroid}
        actions={this.getActions()}
      />
    );
  }

  private onActionSelected = () => {
    const {rightAction} = this.props;
    if (typeof rightAction === 'function') {
      rightAction();
    }
  };

  private getActions = () => {
    const {rightTitle, rightIcon} = this.props;

    return rightTitle
      ? [
          {
            title: rightTitle,
            iconName: rightIcon,
            iconSize: 30,
            show: 'always',
          },
        ]
      : [];
  };
}
