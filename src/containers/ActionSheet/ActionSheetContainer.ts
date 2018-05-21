import {connect} from 'react-redux';

import {navigate} from '@navigator/NavigationService';
import {ActionSheet} from './ActionSheet';

export const ActionSheetContainer = connect(
  null,
  dispatch => ({
    navigate: routeName => navigate(routeName),
  }),
  null,
  {withRef: true}
)(ActionSheet);
