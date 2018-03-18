import {Platform} from 'react-native';
import {Checkbox as CheckboxAndroid} from './Checkbox.android';
import {Checkbox as CheckboxIOS} from './Checkbox.ios';

export const Checkbox = Platform.OS === 'ios' ? CheckboxIOS : CheckboxAndroid;
