import i18next from 'i18next';
import moment from 'moment';
import DeviceInfo from 'react-native-device-info';

import en from './locales/en';
import fr from './locales/fr';

import 'moment/src/locale/fr';

const locale = DeviceInfo.getDeviceLocale();
moment.locale([locale, 'en']);

i18next.init({
  lng: locale,
  fallbackLng: 'en',
  resources: {en, fr},
  // @ts-ignore TODO Fix this
  debug: __DEV__ && !(global as any).jest,
});

export const I18n = i18next;
