import {Platform} from 'react-native';
import {Button as ButtonAndroid} from './Button.android';
import {Button as ButtonIOS} from './Button.ios';

export const Button = Platform.OS === 'ios' ? ButtonIOS : ButtonAndroid;
