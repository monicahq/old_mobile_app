import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RNActionSheet from 'react-native-actionsheet';

const CANCEL_INDEX = 0;
const options = [
  'Cancel',
  'Add a contact',
  // 'Log an activity',
  // 'Log a call',
  // 'Add a reminder',
  // 'Add a note',
];

export class ActionSheet extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
  };
  show = () => {
    this.RNActionSheet.show();
  };

  handlePress = i => {
    const {navigate} = this.props;
    if (i !== 0) {
      navigate('AddContact');
    }
  };

  actionSheetRef = ref => (this.RNActionSheet = ref);

  render() {
    return (
      <RNActionSheet
        ref={this.actionSheetRef}
        options={options}
        cancelButtonIndex={CANCEL_INDEX}
        onPress={this.handlePress}
      />
    );
  }
}
