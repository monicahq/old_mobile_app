import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {back} from 'redux/router';
import {Navbar} from 'components';
import {commonStyles} from 'theme';

export const AddContact = ({back}) => (
  <View style={commonStyles.flex}>
    <Navbar title="Add a contact" onBack={back} />
  </View>
);
AddContact.propTypes = {
  back: PropTypes.func.isRequired,
};

export const AddContactScreen = connect(null, dispatch => ({
  back: () => dispatch(back()),
}))(AddContact);
