import moment from 'moment';

export const getAvatarUrl = contact => {
  const avatar = contact.information.avatar;
  if (avatar && avatar.url) {
    return avatar.url;
  }
};

export const getAvatarColor = contact => {
  const avatar = contact.information.avatar;
  if (avatar && avatar.default_avatar_color) {
    return avatar.default_avatar_color;
  }
};

export const getLastUpdatedDate = contact => {
  return moment(contact.updated_at).format('L');
};

export const getAge = contact => {
  const birthDate =
    contact &&
    contact.information &&
    contact.information.dates &&
    contact.information.dates.birthdate;

  if (!birthDate || birthDate.is_year_unknown || !birthDate.date) {
    return null;
  }
  return moment().diff(birthDate.date, 'years');
};

export const getInitials = contact => {
  return (
    (contact.first_name ? contact.first_name.charAt(0) : '') +
    (contact.last_name ? contact.last_name.charAt(0) : '')
  ).toUpperCase();
};

export const getFamily = contact => {
  const {kids, partners, progenitors} = contact.information.family;
  return [];
  // return [
  //   ...partners.partners.map(person => ({...person, type: 'Partner'})),
  //   ...kids.kids.map(person => ({...person, type: 'Kid'})),
  //   ...progenitors.progenitors.map(person => ({
  //     ...person,
  //     type: 'Progenitor',
  //   })),
  // ];
};
