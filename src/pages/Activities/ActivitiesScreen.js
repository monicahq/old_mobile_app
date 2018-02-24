import {connect} from 'react-redux';

import {Activities} from './Activities';
import {back} from 'redux/router';
import {getActivitiesByContact} from 'redux/activities';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    contact,
    activities: (contact.activities || []).map(
      activityId => state.activities[activityId],
    ),
    isFetching: state.getActivitiesByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  back: () => dispatch(back()),
  getActivitiesByContact: () =>
    dispatch(getActivitiesByContact(navigation.state.params)),
});

export const ActivitiesScreen = connect(mapStateToProps, mapDispatchToProps)(
  Activities,
);
