import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Touchable} from '@components';
import {commonStyles} from '@theme';
import {styles} from './ContactActivityRow.styles';

interface IContactActivityRowProps {
  count: number;
  image: number | {uri: string};
  title: string;
  onPress: (...args: any[]) => any;
  last?: boolean;
}

export class ContactActivityRow extends PureComponent<
  IContactActivityRowProps,
  {}
> {
  public render() {
    const {count, image, title, last, onPress} = this.props;

    return (
      <View>
        <Touchable style={styles.container} onPress={onPress}>
          <Image source={image} style={styles.image} />
          <View style={commonStyles.flex}>
            <Text>{title.toUpperCase()}</Text>
          </View>
          <Text>{count}</Text>
          <Icon
            name="ios-arrow-forward"
            size={25}
            color="#AAA"
            style={styles.icon}
          />
        </Touchable>
        {!last && <View style={styles.border} />}
      </View>
    );
  }
}
