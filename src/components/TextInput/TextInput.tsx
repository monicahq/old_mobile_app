import React, {PureComponent} from 'react';
import {Text, TextInput as RNTextInput, View} from 'react-native';
import {borderColor, styles} from './TextInput.styles';

interface ITextInputProps {
  id?: string;
  title: string;
  touched?: boolean;
  error?: string;
}

export class TextInput extends PureComponent<ITextInputProps> {
  public static defaultProps = {
    touched: false,
    error: null,
  };
  private textInput;

  public focus() {
    this.textInput.focus();
  }

  public textInputRef = ref => (this.textInput = ref);

  public render() {
    const {title, error, touched, id, ...props} = this.props;

    return [
      // TITLE + ERROR
      <View key={0} style={styles.title}>
        {!!title && <Text>{title}</Text>}
        {!!error &&
          touched && (
            <View style={styles.flexRow}>
              <Text> - </Text>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
      </View>,
      // TEXTINPUT
      <RNTextInput
        testID={id}
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
