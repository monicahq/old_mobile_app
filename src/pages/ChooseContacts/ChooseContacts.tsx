import React, {PureComponent} from 'react';

import {I18n} from '@i18n';
import {IContact} from '@models';
import {ContactsContainer} from '../../containers/Contacts/ContactsContainer';

interface IContactsProps {
  navigation: any;
  pop: any;
}

export class ChooseContacts extends PureComponent<IContactsProps, {}> {
  public render() {
    const {pop} = this.props;

    return (
      <ContactsContainer
        onPress={this.onPress}
        onBack={pop}
        title={I18n.t('notes:chooseContact')}
      />
    );
  }

  private onPress = (contactId: IContact) => () => {
    const {navigation} = this.props;
    navigation.state.params.returnData(contactId);
    navigation.goBack();
  };
}
