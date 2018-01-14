import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {logout} from 'redux/user';
import {goToLaunchScreen} from 'redux/router';
import {Button} from 'components';

export class Settings extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    goToLaunchScreen: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  logout = () => {
    this.props.logout();
    this.props.goToLaunchScreen();
  };

  render() {
    const {user} = this.props;
    return (
      <SafeAreaView forceInset={{top: 'always'}}>
        <Text>Settings</Text>
        <Text>{user && user.firstName}</Text>
        <Button onPress={this.logout}>Logout</Button>
      </SafeAreaView>
    );
  }
}

export const SettingsScreen = connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    goToLaunchScreen: () => dispatch(goToLaunchScreen()),
  }),
)(Settings);
