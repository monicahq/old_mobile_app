import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {Navbar, UnderConstruction} from '@components';
import {I18n} from '@i18n';
import {IRouterBackOperation} from '@models/operations';
import {back as backOperation} from '@redux/router';
import {commonStyles} from '@theme';

interface IAddContactProps {
  back: IRouterBackOperation;
}

export class AddContact extends PureComponent<IAddContactProps, {}> {
  public render() {
    const {back} = this.props;
    return (
      <View style={commonStyles.flex}>
        <Navbar title={I18n.t('contacts:add')} onBack={back} />
        <UnderConstruction />
      </View>
    );
  }
}

export const AddContactScreen = connect(null, dispatch => ({
  back: () => dispatch(backOperation()),
}))(AddContact);
