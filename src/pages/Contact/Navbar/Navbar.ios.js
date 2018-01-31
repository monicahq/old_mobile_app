import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './Navbar.styles';
import {navbarColor} from 'theme';
import {ContactAvatar} from 'components/ContactAvatar';

const lightContent = {style: 'light-content'};

export class Navbar extends PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    onPressBack: PropTypes.func.isRequired,
  };
  render() {
    const {contact, onPressBack} = this.props;

    return (
      <NavigationBar
        leftButton={
          <TouchableOpacity onPress={onPressBack} style={styles.leftButton}>
            <Icon name="ios-arrow-back" size={30} color="white" />
          </TouchableOpacity>
        }
        title={
          <ContactAvatar
            contact={contact}
            size={76}
            style={styles.contactImage}
          />
        }
        tintColor={navbarColor}
        statusBar={lightContent}
      />
    );
  }
}
