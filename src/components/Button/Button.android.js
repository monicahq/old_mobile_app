import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  TouchableNativeFeedback,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {styles} from './Button.styles';

export class Button extends Component {
  static defaultProps = {
    disabled: false,
    loading: false,
  };

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    loadingTitle: PropTypes.string,
  };

  getTitle() {
    const {title, children, loadingTitle, loading} = this.props;
    if (loading && loadingTitle) {
      return loadingTitle.toUpperCase();
    }
    return (title || children || '').toUpperCase();
  }

  render() {
    const {disabled, loading} = this.props;

    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        disabled={disabled}
        background={TouchableNativeFeedback.SelectableBackground()}>
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
