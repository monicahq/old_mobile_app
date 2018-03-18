import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';

import {commonStyles} from '@theme';
import {styles} from './EmptyActivities.styles';

interface IEmptyActivityProps {
  title: string;
  subtitle?: string;
  image: number | {uri: string};
}

export class EmptyActivity extends PureComponent<IEmptyActivityProps> {
  public render() {
    const {title, subtitle, image} = this.props;
    return (
      <View style={styles.container}>
        <View style={commonStyles.flex} />

        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        <View style={commonStyles.flex} />
      </View>
    );
  }
}
