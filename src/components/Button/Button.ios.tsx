import React, {PureComponent} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
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
      return loadingTitle;
    }
    return title || children || '';
  }

  public render() {
    const {onPress, disabled, loading, id} = this.props;

    return (
      <TouchableOpacity
        testID={id}
        style={[styles.button, disabled && styles.buttonDisabled]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.4}
      >
        <Text style={styles.buttonText}>{this.getTitle()}</Text>
        {loading && (
          <ActivityIndicator color="#ffffff" style={styles.activityIndicator} />
        )}
      </TouchableOpacity>
    );
  }
}
