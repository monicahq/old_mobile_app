import {IRootState} from '@models';
import {connect} from 'react-redux';

import {getActivitiesByContact} from '@redux/activities';
import {back} from '@redux/router';
import {Activities} from './Activities';

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
  back: () => dispatch(back()),
  getActivitiesByContact: () =>
    dispatch(getActivitiesByContact(navigation.state.params)),
});

export const ActivitiesScreen = connect(mapStateToProps, mapDispatchToProps)(
  Activities
);
