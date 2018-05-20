// tslint:disable-next-line:no-var-requires
const {version} = require('../../../package.json');
import React, {PureComponent} from 'react';
import {Platform, Switch, Text, TouchableOpacity, View} from 'react-native';

import {Navbar} from '@components';
import {I18n} from '@i18n';
import {
  IBetaSubscribeOperation,
  IUserLogoutOperation,
} from '@models/operations';
import {commonStyles, primaryColor} from '@theme';
import {styles} from './Settings.styles';

interface ISettingsProps {
  beta: boolean;
  subscribeBeta: IBetaSubscribeOperation;
  logout: IUserLogoutOperation;
  goToLaunchScreen: any; // TODO FIX THIS
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
        <Navbar title={I18n.t('settings:settings')} />

        <View style={[commonStyles.flex, styles.container]}>
          <View style={styles.betaToggleContainer}>
            <Text style={styles.betaTitle}>
              {I18n.t('settings:betaInstall')}
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
              {I18n.t('settings:betaInstallExplanation')}
            </Text>
            <Text style={styles.appVersion}>
              {I18n.t('settings:version', {version})}
            </Text>
          </View>

          <TouchableOpacity onPress={this.logout}>
            <View style={styles.logoutContainer}>
              <Text style={styles.logoutText}>{I18n.t('settings:logout')}</Text>
            </View>
          </TouchableOpacity>

          <View style={commonStyles.flex} />
          <Text style={styles.freepik1}>{I18n.t('settings:freepik1')}</Text>
          <Text style={styles.freepik2}>{I18n.t('settings:freepik2')}</Text>
        </View>
      </View>
    );
  }
}
