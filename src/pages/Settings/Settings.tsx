// tslint:disable-next-line:no-var-requires
const {version} = require('../../../package.json');
import React, {PureComponent} from 'react';
import {Platform, Switch, Text, TouchableOpacity, View} from 'react-native';

import {Button, Navbar} from '@components';
import {
  IBetaSubscribeOperation,
  IRouterGoToLaunchScreenOperation,
  IUserLogoutOperation,
} from '@models/operations';
import {commonStyles, primaryColor} from '@theme';
import {styles} from './Settings.styles';

interface ISettingsProps {
  beta: boolean;
  subscribeBeta: IBetaSubscribeOperation;
  logout: IUserLogoutOperation;
  goToLaunchScreen: IRouterGoToLaunchScreenOperation;
}

export class Settings extends PureComponent<ISettingsProps, {}> {
  public logout = () => {
    this.props.logout();
    this.props.goToLaunchScreen();
  };

  public render() {
    const {beta, subscribeBeta} = this.props;
    return (
      <View style={commonStyles.flex}>
        <Navbar title="Settings" />

        <View style={[commonStyles.flex, styles.container]}>
          <View style={styles.betaToggleContainer}>
            <Text style={styles.betaTitle}>
              Enable automatic beta installs.
            </Text>
            <Switch
              value={beta}
              onValueChange={subscribeBeta}
              thumbTintColor={
                (Platform.OS === 'android' && primaryColor) || null
              }
            />
          </View>

          <View style={styles.betaInfo}>
            <Text style={styles.betaSubtitle}>
              If enabled, your application will automatically install beta
              versions. That will let you test cutting edge features, but beware
              though: you might install versions that are not stable yet.
            </Text>
            <Text style={styles.appVersion}>Version: {version}</Text>
          </View>

          <TouchableOpacity onPress={this.logout}>
            <View style={styles.logoutContainer}>
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </TouchableOpacity>

          <View style={commonStyles.flex} />
          <Text style={styles.freepik1}>
            Most illustrations used in this app come from Freepik
          </Text>
          <Text style={styles.freepik2}>Designed by freepik.com</Text>
        </View>
      </View>
    );
  }
}
