import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView} from 'react-native';

import {commonStyles} from 'theme';
import {ContactAvatar, Navbar} from 'components';
import {getAge} from 'utils/contacts';
import {styles} from './Contact.styles';

import {ContactInfos} from './ContactInfos/ContactInfos';
import {ContactActivityRow} from './ContactActivityRow/ContactActivityRow';

export class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    back: PropTypes.func.isRequired,
  };
  render() {
    const {contact, back} = this.props;

    const age = getAge(contact);
    console.log(contact);

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
            <ContactInfos />
          </View>
          <View style={styles.bloc}>
            <ContactActivityRow
              onPress={() => {
                console.log('Test');
              }}
              image={require('assets/icons/phone.png')}
              title="Phone calls"
              count={contact.statistics.number_of_calls}
            />
            <ContactActivityRow
              onPress={() => {
                console.log('Test');
              }}
              image={require('assets/icons/activities.png')}
              title="Activities"
              count={contact.statistics.number_of_activities}
            />
            <ContactActivityRow
              onPress={() => {
                console.log('Test');
              }}
              image={require('assets/icons/reminders.png')}
              title="Reminders"
              count={contact.statistics.number_of_reminders}
            />
            <ContactActivityRow
              onPress={() => {
                console.log('Test');
              }}
              image={require('assets/icons/tasks.png')}
              title="Tasks"
              count={contact.statistics.number_of_tasks}
            />
            <ContactActivityRow
              onPress={() => {
                console.log('Test');
              }}
              image={require('assets/icons/notes.png')}
              title="Notes"
              count={contact.statistics.number_of_notes}
            />
            <ContactActivityRow
              onPress={() => {
                console.log('Test');
              }}
              image={require('assets/icons/gift.png')}
              title="Gifts"
              count={contact.statistics.number_of_gifts}
            />
            <ContactActivityRow
              onPress={() => {
                console.log('Test');
              }}
              image={require('assets/icons/debts.png')}
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
