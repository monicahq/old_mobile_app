import React, {PureComponent} from 'react';
import RNActionSheet from 'react-native-actionsheet';

import {I18n} from '@i18n';
import {IRouterNavigateOperation} from '@models/operations';

const CANCEL_INDEX = 0;
const options = [
  I18n.t('common:cancel'),
  I18n.t('common:add'),
  // 'Log an activity',
  // 'Log a call',
  // 'Add a reminder',
  // 'Add a note',
];

interface IActionSheetProps {
  navigate: IRouterNavigateOperation;
}

export class ActionSheet extends PureComponent<IActionSheetProps, {}> {
  private RNActionSheet;

  public show = () => {
    this.RNActionSheet.show();
  };

  public handlePress = i => {
    const {navigate} = this.props;
    if (i !== 0) {
      navigate('AddContact');
    }
  };

  public actionSheetRef = ref => (this.RNActionSheet = ref);

  public render() {
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
