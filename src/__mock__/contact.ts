import {IContact} from '@models';

export const contact1: IContact = {
  id: 2,
  updated_at: '2018-12-17',
  addresses: [
    {
      street: '5815 Park',
      city: 'Montreal',
    },
  ],
  first_name: 'Theo',
  last_name: 'Mathieu',
  information: {
    relationships: {
      family: {
        total: 0,
        contacts: [],
      },
      love: {
        total: 0,
        contacts: [],
      },
      work: {
        total: 0,
        contacts: [],
      },
      friend: {
        total: 0,
        contacts: [],
      },
    },
    how_you_met: {
      first_met_date: {
        date: '1991-12-17',
      },
      first_met_through_contact: null,
      general_information: 'test',
    },
    avatar: {
      default_avatar_color: 'blue',
      url: 'testurl',
      source: 'external',
    },
    career: {
      company: 'Google',
      job: 'Developer',
      linkedin_profile_url: 'http://mylinkedin',
    },
    dates: {
      birthdate: {
        date: null,
      },
      deceased_date: {
        date: null,
      },
    },
  },
  statistics: {
    number_of_activities: 2,
    number_of_calls: 3,
    number_of_debts: 4,
    number_of_gifts: 5,
    number_of_notes: 6,
    number_of_reminders: 9,
    number_of_tasks: 1,
  },
  contactFields: [
    {
      contact_field_type: {
        fontawesome_icon: 'fa fa-facebook',
        name: 'name',
        protocol: 'http',
        type: 'email',
      },
      content: 'test@gmail.com',
    },
  ],
};
