import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextInput as RNTextInput, Text, View} from 'react-native';
import {styles, borderColor} from './TextInput.styles';

export class TextInput extends Component {
  static defaultProps = {
    touched: false,
    error: null,
  };

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
    touched: PropTypes.bool,
    error: PropTypes.string,
  };

  focus() {
    this.textInput.focus();
  }

  textInputRef = ref => (this.textInput = ref);

  render() {
    const {title, error, touched, ...props} = this.props;

    return [
      // TITLE + ERROR
      <View key={0} style={styles.title}>
        {title && <Text>{title}</Text>}
        {error &&
          touched && (
            <View style={styles.flexRow}>
              <Text> - </Text>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
      </View>,
      // TEXTINPUT
      <RNTextInput
        ref={this.textInputRef}
        key={1}
        style={styles.textInput}
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid={borderColor}
        {...props}
      />,
    ];
  }
}
