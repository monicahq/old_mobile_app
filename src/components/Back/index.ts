import {Platform} from 'react-native';
import {Back as BackAndroid} from './Back.android';
import {Back as BackIOS} from './Back.ios';

export const Back = Platform.OS === 'ios' ? BackIOS : BackAndroid;
