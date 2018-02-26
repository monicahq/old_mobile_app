import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';

import {commonStyles} from 'theme';
import {styles} from './EmptyActivities.styles';

export class EmptyActivity extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    image: PropTypes.number.isRequired,
  };
  render() {
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
