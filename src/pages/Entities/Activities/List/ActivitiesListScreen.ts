import {IRootState} from '@models';
import {connect} from 'react-redux';

import {pop} from '@navigator/NavigationService';
import {getActivitiesByContact} from '@redux/activities';
import {ActivitiesList} from './ActivitiesList';

export const mapStateToProps = (state: IRootState, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    contact,
    activities: (contact.activities || []).map(
      activityId => state.activities[activityId]
    ),
    isFetching: state.getActivitiesByContact.isFetching,
    statistics: state.getActivitiesByContact.statistics,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  pop,
  getActivitiesByContact: () =>
    dispatch(getActivitiesByContact(navigation.state.params)),
});

export const ActivitiesListScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
