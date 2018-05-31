import React, {PureComponent} from 'react';
import {View} from 'react-native';

import {styles} from './FormListItem.styles';

interface IFormListItemProps {
  last?: boolean;
}

export class FormListItem extends PureComponent<IFormListItemProps> {
  public static defaultProps = {
    last: false,
  };
  public render() {
    const {children, last} = this.props;

    return (
      <View style={[styles.container, last ? styles.last : null]}>
        {children}
      </View>
    );
  }
}
