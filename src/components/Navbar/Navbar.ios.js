import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './Navbar.styles';
import {hitSlop, statusBarLightContent, navbarColor} from 'theme';

export class Navbar extends Component {
  static propTypes = {
    onBack: PropTypes.func,
    title: PropTypes.any,
  };

  render() {
    const {onBack, title} = this.props;

    return (
      <NavigationBar
        leftButton={
          onBack && (
            <TouchableOpacity
              onPress={onBack}
              style={styles.leftButton}
              hitSlop={hitSlop}>
              <Icon name="ios-arrow-back" size={30} color="white" />
            </TouchableOpacity>
          )
        }
        title={typeof title === 'string' ? {title, tintColor: 'white'} : title}
        tintColor={navbarColor}
        statusBar={statusBarLightContent}
      />
    );
  }
}
