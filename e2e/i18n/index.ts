import i18next = require('i18next');
import en from '../../src/i18n/locales/en';

i18next.init({
  lng: 'e ',
  fallbackLng: 'en',
  resources: {en},
});

export const I18n = i18next;
