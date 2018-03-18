import React, {PureComponent} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {ContactAvatar, Navbar} from '@components';
import {commonStyles} from '@theme';
import {getAge} from '@utils/contacts';
import {styles} from './Contact.styles';

import {IRouterBackOperation} from '@redux/router';
import {IContact} from '@src/models';
import {ContactActivityRow} from './ContactActivityRow/ContactActivityRow';
import {ContactInfos} from './ContactInfos/ContactInfos';

interface IContactProps {
  contact: IContact;
  back: IRouterBackOperation;
  navigate: (routeName: string, params?: any) => () => any;
}

export class Contact extends PureComponent<IContactProps, {}> {
  // componentWillMount() {
  //   this.props.navigate('Gifts', this.props.contact.id)();
  // }
  public render() {
    const {contact, back, navigate} = this.props;

    const age = getAge(contact);

    return (
      <View style={[commonStyles.flex, commonStyles.bgWhite]}>
        <Navbar
          title={
            <ContactAvatar
              contact={contact}
              size={76}
              style={styles.contactImage}
            />
          }
          onBack={back}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.title}>
            {contact.first_name} {contact.last_name}
          </Text>
          {!!age && <Text style={styles.subtitle}>{age} years</Text>}
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={[styles.bloc, styles.paddingVertical]}>
            <ContactInfos contact={contact} />
          </View>
          <View style={styles.bloc}>
            <ContactActivityRow
              onPress={navigate('Calls', contact.id)}
              image={require('@assets/icons/phone.png')}
              title="Phone calls"
              count={contact.statistics.number_of_calls}
            />
            <ContactActivityRow
              onPress={navigate('Activities', contact.id)}
              image={require('@assets/icons/activities.png')}
              title="Activities"
              count={contact.statistics.number_of_activities}
            />
            <ContactActivityRow
              onPress={navigate('Reminders', contact.id)}
              image={require('@assets/icons/reminders.png')}
              title="Reminders"
              count={contact.statistics.number_of_reminders}
            />
            <ContactActivityRow
              onPress={navigate('Tasks', contact.id)}
              image={require('@assets/icons/tasks.png')}
              title="Tasks"
              count={contact.statistics.number_of_tasks}
            />
            <ContactActivityRow
              onPress={navigate('Notes', contact.id)}
              image={require('@assets/icons/notes.png')}
              title="Notes"
              count={contact.statistics.number_of_notes}
            />
            <ContactActivityRow
              onPress={navigate('Gifts', contact.id)}
              image={require('@assets/icons/gift.png')}
              title="Gifts"
              count={contact.statistics.number_of_gifts}
            />
            <ContactActivityRow
              onPress={navigate('Debts', contact.id)}
              image={require('@assets/icons/debts.png')}
              title="Debts"
              count={contact.statistics.number_of_debts}
              last={true}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
