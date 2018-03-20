import {IAppState} from '@models';
import {connect, Dispatch} from 'react-redux';
import {Action} from 'redux';

import {back, navigate} from '@redux/router';
import {Contact} from './Contact';

export interface IContactProps {
  navigation: {
    state: {
      params: number;
    };
  };
}

export const ContactScreen = connect(
  (state: IAppState, props: IContactProps) => ({
    contact: state.contacts[props.navigation.state.params],
  }),
  (dispatch: Dispatch<Action>) => ({
    back: () => dispatch(back()),
    navigate: (routeName, contactId) => () =>
      dispatch(navigate(routeName, contactId)),
  })
)(Contact);
