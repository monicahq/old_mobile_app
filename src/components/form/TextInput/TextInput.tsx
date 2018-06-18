import React, {PureComponent} from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native';
import {borderColor, styles} from './TextInput.styles';

import {Touchable} from '@components/Touchable';

interface ITextInputProps extends TextInputProps {
  id?: string;
  title: string;
  touched?: boolean;
  error?: string;
  onSubmitEditing?: (...args) => void;
  inlineImage?: ImageSourcePropType;
  inlineImageAction?: (...args) => void;
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

    const multilineTextStyle = props.multiline ? styles.titleMultine : null;

    const inlineImage = (
      <Image source={props.inlineImage} style={styles.textInputImage} />
    );

    return [
      // TITLE + ERROR
      <View key={0} style={styles.title}>
        {!!title && <Text style={multilineTextStyle}>{title}</Text>}
        {!!error &&
          touched && (
            <View style={styles.flexRow}>
              <Text style={multilineTextStyle}> - </Text>
              <Text
                style={[styles.errorText, multilineTextStyle]}
                testID={`input-error-${id}`}
              >
                {error}
              </Text>
            </View>
          )}
      </View>,
      // TEXTINPUT
      <View
        key={1}
        style={!props.multiline && [styles.flexRow, styles.textInput]}
      >
        <RNTextInput
          testID={`input-${id}`}
          ref={this.textInputRef}
          style={[
            styles.textInput,
            !!props.inlineImage && styles.hasInlineImage,
          ]}
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid={borderColor}
          {...props}
        />
        {!!props.inlineImageAction ? (
          <Touchable onPress={props.inlineImageAction}>{inlineImage}</Touchable>
        ) : (
          inlineImage
        )}
      </View>,
    ];
  }
}
