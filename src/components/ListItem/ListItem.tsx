import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {commonStyles} from '@theme';
import {styles} from './ListItem.styles';

interface IListItemProps {
  title: string;
  subtitle?: string;
  infoRight?: string;
  lastItem?: boolean;
}

export class ListItem extends PureComponent<IListItemProps> {
  public render() {
    const {title, infoRight, subtitle, lastItem} = this.props;

    return (
      <View style={[styles.row, !lastItem ? styles.notLastRow : null]}>
        <Text>{title}</Text>
        {subtitle && <Text style={styles.typeText}>{subtitle}</Text>}
        {infoRight && <View style={commonStyles.flex} />}
        {infoRight && <Text style={styles.typeText}>{infoRight}</Text>}
      </View>
    );
  }
}
