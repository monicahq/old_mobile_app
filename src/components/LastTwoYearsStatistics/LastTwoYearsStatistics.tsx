import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';

// import {commonStyles} from 'theme';
import {styles} from './LastTwoYearsStatistics.styles';

interface ILastTwoYearsStatisticsProps {
  image: number | {uri: string};
  count1: number;
  title1: string;
  count2: number;
  title2: string;
}

export class LastTwoYearsStatistics extends PureComponent<
  ILastTwoYearsStatisticsProps
> {
  public render() {
    const {image, count1, count2, title1, title2} = this.props;

    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.leftContainer}>
          <Text style={styles.count}>{count1}</Text>
          <Text style={styles.text}>{title1}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.count}>{count2}</Text>
          <Text style={styles.text}>{title2}</Text>
        </View>
      </View>
    );
  }
}
