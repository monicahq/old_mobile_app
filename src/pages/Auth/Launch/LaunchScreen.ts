import {connect} from 'react-redux';

import {navigate} from '@navigator/NavigationService';
import {Launch} from './Launch';

export const LaunchScreen = connect(
  null,
  dispatch => {
    return {
      navigate: routeName => () => navigate(routeName),
    };
  }
)(Launch);
