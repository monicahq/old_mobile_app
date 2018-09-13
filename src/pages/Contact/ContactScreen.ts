import {IRootState} from '@models';
import {connect, MapDispatchToProps} from 'react-redux';

import {navigate, pop} from '@navigator/NavigationService';
import {Contact} from './Contact';

export interface IContactProps {
  navigation: {
    state: {
      params: number;
    };
  };
}

export const ContactScreen = connect(
  (state: IRootState, props: IContactProps) => ({
    contact: state.contacts[props.navigation.state.params],
  }),
  // TODO
  (dispatch: MapDispatchToProps<any, void>) => ({
    pop,
    navigate: (routeName, contactId) => () => navigate(routeName, contactId),
  })
)(Contact);
