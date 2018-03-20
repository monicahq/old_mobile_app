import React, {PureComponent} from 'react';
import {Platform, Switch, Text, View} from 'react-native';

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
