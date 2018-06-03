import {primaryColor} from '@theme';
import React, {PureComponent} from 'react';
import {Switch as RNSwitch, SwitchProps, Text, View} from 'react-native';
import {styles} from './Switch.styles';

interface ISwitchProps extends SwitchProps {
  id?: string;
  title: string;
  touched?: boolean;
  error?: string;
}

export class Switch extends PureComponent<ISwitchProps> {
  public static defaultProps = {
    touched: false,
    error: null,
  };

  public render() {
    const {title, error, touched, id, ...props} = this.props;

    return (
      <View style={styles.container}>
        <View key={0} style={styles.title}>
          {!!title && <Text>{title}</Text>}
          <Text style={styles.errorText} testID={`switch-error-${id}`}>
            {' '}
            {!!error && touched && error}
          </Text>
        </View>
        <RNSwitch
          testID={`input-${id}`}
          key={1}
          onTintColor={primaryColor}
          {...props}
        />
      </View>
    );
  }
}
