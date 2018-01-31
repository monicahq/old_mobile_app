import moment from 'moment';

export const getAvatarUrl = contact => {
  const avatar = contact.information.avatar;
  if (avatar && avatar.url) {
    return avatar.url;
  }

  // return 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
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
  if (!birthDate) {
    return null;
  }
  return moment().diff(birthDate.date, 'years');
};
