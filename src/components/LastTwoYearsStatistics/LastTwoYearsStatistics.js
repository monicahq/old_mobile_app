import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';

// import {commonStyles} from 'theme';
import {styles} from './LastTwoYearsStatistics.styles';

export class LastTwoYearsStatistics extends PureComponent {
  static propTypes = {
    image: PropTypes.number.isRequired,
    count1: PropTypes.number.isRequired,
    title1: PropTypes.string.isRequired,
    count2: PropTypes.number.isRequired,
    title2: PropTypes.string.isRequired,
  };
  render() {
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
