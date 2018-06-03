import {ContactAvatar, Touchable} from '@components';
import {I18n} from '@i18n';
import {IContact} from '@models';
import {navigate} from '@navigator/NavigationService';
import {getName} from '@utils/contacts';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {styles} from './ContactChooser.styles';

interface IContactChooserProps {
  id?: string;
  touched?: boolean;
  error?: string;
  value: IContact;
  onValueChange: (...args) => void;
}

export class ContactChooser extends PureComponent<IContactChooserProps> {
  public static defaultProps = {
    touched: false,
    error: null,
  };

  public render() {
    const {error, touched, id, value} = this.props;

    return (
      <View style={styles.container}>
        {value && [
          <ContactAvatar key={0} contact={value} size={40} />,
          <Text style={styles.contactName} key={10}>
            {getName(value)}
          </Text>,
        ]}

        {!value && (
          <View style={styles.title}>
            <Text>{I18n.t('contacts:chooser.noContact')}</Text>
            {!!error &&
              touched && (
                <Text
                  style={styles.errorText}
                  testID={`contact-chooser-error-${id}`}
                >
                  {' - '}
                  {error}
                </Text>
              )}
          </View>
        )}
        <Touchable onPress={this.navigate}>
          <Text style={styles.edit}>{I18n.t('common:edit')}</Text>
        </Touchable>
      </View>
    );
  }

  private navigate = () => {
    navigate('ChooseContacts', {returnData: this.returnData});
  };

  private returnData = (contact: IContact) => {
    this.props.onValueChange(contact);
  };
}
