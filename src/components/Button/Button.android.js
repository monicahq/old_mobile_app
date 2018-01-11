import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableNativeFeedback, View, Text} from 'react-native';
import {styles} from './Button.styles';

export class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
  };

  getText() {
    const buttonText =
      this.props.text.toUpperCase() || this.props.children || '';
    return buttonText;
  }

  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.getText()}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
