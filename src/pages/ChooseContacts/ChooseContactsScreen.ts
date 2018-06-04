import {connect} from 'react-redux';

import {pop} from '@navigator/NavigationService';
import {ChooseContacts} from './ChooseContacts';

export const ChooseContactsScreen = connect(
  null,
  (dispatch, props) => {
    return {
      pop: () => pop(),
    };
  }
)(ChooseContacts);
