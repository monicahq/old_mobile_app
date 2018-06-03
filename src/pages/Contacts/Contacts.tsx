import React, {PureComponent} from 'react';

import {IContact} from '@models';
import {ContactsContainer} from '../../containers/Contacts/ContactsContainer';

interface IContactsProps {
  navigateToContact: (contact: IContact) => any;
}

export class Contacts extends PureComponent<IContactsProps, {}> {
  public render() {
    const {navigateToContact} = this.props;

    return <ContactsContainer onPress={navigateToContact} />;
  }
}
