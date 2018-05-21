import {IAddress, IContact} from '@models';
import moment from 'moment';

export const getName = (contact: IContact): string => {
  let name = contact.first_name;
  if (contact.last_name) {
    name += ' ' + contact.last_name;
  }
  return name;
};

export const getAvatarUrl = (contact: IContact): string => {
  const avatar = contact.information.avatar;
  if (avatar && avatar.url) {
    return avatar.url;
  }
};

export const getAvatarColor = (contact: IContact): string => {
  const avatar = contact.information.avatar;
  if (avatar && avatar.default_avatar_color) {
    return avatar.default_avatar_color;
  }
};

export const getLastUpdatedDate = (contact: IContact): string => {
  return moment(contact.updated_at).format('L');
};

export const getAge = (contact: IContact): number => {
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

export const getInitials = (contact: IContact): string => {
  return (
    (contact.first_name ? contact.first_name.charAt(0) : '') +
    (contact.last_name ? contact.last_name.charAt(0) : '')
  ).toUpperCase();
};

export const getRelationships = (contact: IContact) => {
  const {family, friend, love, work} = contact.information.relationships;
  return [
    ...family.contacts.map(person => ({...person, type: 'Family'})),
    ...friend.contacts.map(person => ({...person, type: 'Friend'})),
    ...love.contacts.map(person => ({...person, type: 'Loved one'})),
    ...work.contacts.map(person => ({...person, type: 'Work'})),
  ];
};

export const getAddressLabel = (address: IAddress) => {
  let res = '';
  if (address.street) {
    res += ' ' + address.street;
  }
  if (address.postal_code) {
    res += ' ' + address.postal_code;
  }
  if (address.city) {
    res += ' ' + address.city;
  }

  return res.trim();
};
