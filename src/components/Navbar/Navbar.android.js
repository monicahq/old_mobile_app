import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {commonStyles} from 'theme';

const actions = [
  {title: 'Close', iconName: 'close', iconSize: 30, show: 'always'},
];

export class Navbar extends PureComponent {
  static propTypes = {
    onBack: PropTypes.func,
    title: PropTypes.any,
  };

  onActionSelected = () => {
    this.props.onBack();
  };

  render() {
    const {onBack, title} = this.props;

    return (
      <Icon.ToolbarAndroid
        logo={require('assets/logo.png')}
        title={'  ' + title}
        titleColor="white"
        onActionSelected={this.onActionSelected}
        style={commonStyles.toolbarAndroid}
        actions={onBack && actions}
      />
    );
  }
}
