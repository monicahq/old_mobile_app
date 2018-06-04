import {connect} from 'react-redux';

import {IContact} from '@models';
import {navigate} from '@navigator/NavigationService';
import {Contacts} from './Contacts';

export const ContactsScreen = connect(
  null,
  dispatch => {
    return {
      navigateToContact: (contact: IContact) => () =>
        navigate('Contact', contact.id),
    };
  }
)(Contacts);
