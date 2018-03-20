import React, {PureComponent} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import {IButtonProps} from './Button.props';
import {styles} from './Button.styles';

export class Button extends PureComponent<IButtonProps> {
  public static defaultProps = {
    disabled: false,
    loading: false,
  };

  public getTitle() {
    const {title, children, loadingTitle, loading} = this.props;
    if (loading && loadingTitle) {
      return loadingTitle.toUpperCase();
    }
    return (title || children || '').toUpperCase();
  }

  public render() {
    const {disabled, loading} = this.props;

    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        disabled={disabled}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={[styles.button, disabled && styles.buttonDisabled]}>
          <Text style={styles.buttonText}>{this.getTitle()}</Text>
          {loading && (
            <ActivityIndicator
              color="#ffffff"
              style={styles.activityIndicator}
            />
          )}
        </View>
      </TouchableNativeFeedback>
    );
  }
}
