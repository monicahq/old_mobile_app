import React, {PureComponent} from 'react';
import {Platform, ScrollView, Text, View} from 'react-native';

import {ContactAvatar, Navbar} from '@components';
import {I18n} from '@i18n';
import {IPopAction} from '@navigator/NavigationService';
import {IContact} from '@src/models';
import {appScreensStyles} from '@theme';
import {getAge, getName} from '@utils/contacts';
import {styles} from './Contact.styles';
import {ContactActivityRow} from './ContactActivityRow/ContactActivityRow';
import {ContactInfos} from './ContactInfos/ContactInfos';

interface IContactProps {
  contact: IContact;
  pop: IPopAction;
  navigate: (routeName: string, params?: any) => () => any;
}

export class Contact extends PureComponent<IContactProps, {}> {
  // public componentWillMount() {
  //   this.props.navigate('Notes', this.props.contact.id)();
  // }
  public render() {
    const {contact, pop, navigate} = this.props;

    const age = getAge(contact);
    const ageText = !!age && (
      <Text style={styles.subtitle}>{I18n.t('contacts:age', {age})}</Text>
    );
    const name = getName(contact);
    const isAndroid = Platform.OS === 'android';
    const avatar = (
      <ContactAvatar
        contact={contact}
        size={76}
        style={!isAndroid && styles.contactImage}
      />
    );

    return (
      <View style={appScreensStyles.container}>
        <Navbar title={isAndroid ? name : avatar} onBack={pop} />
        {isAndroid && (
          <View style={styles.topAndroidContainer}>
            {avatar}
            {ageText}
          </View>
        )}
        {!isAndroid && (
          <View style={styles.topIosContainer}>
            <Text style={styles.title}>{name}</Text>
            {ageText}
          </View>
        )}

        <ScrollView style={styles.scrollView}>
          <View style={[styles.bloc, styles.paddingVertical]}>
            <ContactInfos contact={contact} />
          </View>
          <View style={styles.bloc}>
            <ContactActivityRow
              onPress={navigate('Calls', contact.id)}
              image={require('@assets/icons/phone.png')}
              title={I18n.t('calls:calls')}
              count={contact.statistics.number_of_calls}
            />
            <ContactActivityRow
              onPress={navigate('Activities', contact.id)}
              image={require('@assets/icons/activities.png')}
              title={I18n.t('activities:activities')}
              count={contact.statistics.number_of_activities}
            />
            <ContactActivityRow
              onPress={navigate('Reminders', contact.id)}
              image={require('@assets/icons/reminders.png')}
              title={I18n.t('reminders:reminders')}
              count={contact.statistics.number_of_reminders}
            />
            <ContactActivityRow
              onPress={navigate('Tasks', contact.id)}
              image={require('@assets/icons/tasks.png')}
              title={I18n.t('tasks:tasks')}
              count={contact.statistics.number_of_tasks}
            />
            <ContactActivityRow
              onPress={navigate('Notes', contact.id)}
              image={require('@assets/icons/notes.png')}
              title={I18n.t('notes:notes')}
              count={contact.statistics.number_of_notes}
            />
            <ContactActivityRow
              onPress={navigate('Gifts', contact.id)}
              image={require('@assets/icons/gift.png')}
              title={I18n.t('gifts:gifts')}
              count={contact.statistics.number_of_gifts}
            />
            <ContactActivityRow
              onPress={navigate('Debts', contact.id)}
              image={require('@assets/icons/debts.png')}
              title={I18n.t('debts:debts')}
              count={contact.statistics.number_of_debts}
              last={true}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
