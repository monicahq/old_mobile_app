import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, Switch, View, Platform} from 'react-native';
import {Button, Navbar} from 'components';

import {commonStyles, primaryColor} from 'theme';
import {styles} from './Settings.styles';

export class Settings extends PureComponent {
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
      <View style={commonStyles.flex}>
        <Navbar title="Settings" />

        <View style={[commonStyles.flex, styles.container]}>
          <View style={styles.betaContainer}>
            <View style={styles.rowCentered}>
              <Switch
                value={beta}
                onValueChange={subscribeBeta}
                thumbTintColor={
                  (Platform.OS === 'android' && primaryColor) || null
                }
              />
              <Text style={styles.betaTitle}>Early Beta access.</Text>
            </View>

            <Text style={styles.betaSubtitle}>
              Please be careful ! You phone might automatically install a buggy
              version of Monica on your phone.
            </Text>
          </View>

          <Button onPress={this.logout}>Logout</Button>
        </View>
      </View>
    );
  }
}
