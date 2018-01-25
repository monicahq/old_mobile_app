import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Text, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {logout} from 'redux/user';
import {goToLaunchScreen} from 'redux/router';
import {subscribeBeta} from 'redux/beta';
import {Button} from 'components';

export class Settings extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    goToLaunchScreen: PropTypes.func.isRequired,
    beta: PropTypes.bool.isRequired,
    subscribeBeta: PropTypes.func.isRequired,
  };

  logout = () => {
    this.props.logout();
    this.props.goToLaunchScreen();
  };

  render() {
    const {beta, subscribeBeta} = this.props;
    return (
      <SafeAreaView forceInset={{top: 'always'}}>
        <Text>Settings</Text>
        {/* <Text>{user && user.firstName}</Text> */}
        <Button onPress={this.logout}>Logout</Button>

        <Switch value={beta} onValueChange={subscribeBeta} />
        <Text>Beta access</Text>
      </SafeAreaView>
    );
  }
}

export const SettingsScreen = connect(
  state => ({
    beta: state.beta.isSubscribed,
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    goToLaunchScreen: () => dispatch(goToLaunchScreen()),
    subscribeBeta: isSubscribed => dispatch(subscribeBeta(isSubscribed)),
  }),
)(Settings);
