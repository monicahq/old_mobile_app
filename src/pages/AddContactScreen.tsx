import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {Navbar} from '@components';
import {I18n} from '@i18n';
import {IPopAction, pop as popAction} from '@navigator/NavigationService';
import {appScreensStyles} from '@theme';

interface IAddContactProps {
  pop: IPopAction;
}

export class AddContact extends PureComponent<IAddContactProps> {
  public render() {
    const {pop} = this.props;
    return (
      <View style={appScreensStyles.container}>
        <Navbar title={I18n.t('contacts:add')} onBack={pop} />
      </View>
    );
  }
}

export const AddContactScreen = connect(
  null,
  dispatch => ({
    pop: () => popAction(),
  })
)(AddContact);
