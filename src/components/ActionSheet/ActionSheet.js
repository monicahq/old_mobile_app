import React, {Component} from 'react';
import RNActionSheet from 'react-native-actionsheet';

const CANCEL_INDEX = 0;
const options = [
  'Cancel',
  'Add a contact',
  'Log an activity',
  'Log a call',
  'Add a reminder',
  'Add a note',
];

export class ActionSheet extends Component {
  show = () => {
    this.RNActionSheet.show();
  };

  handlePress = i => {
    const {navigate} = this.props;
    if (i !== 0) {
      navigate('AddContact');
    }
  };

  render() {
    return (
      <RNActionSheet
        ref={o => (this.RNActionSheet = o)}
        options={options}
        cancelButtonIndex={CANCEL_INDEX}
        onPress={this.handlePress}
      />
    );
  }
}
