import {Platform} from 'react-native';
import {Navbar as NavbarAndroid} from './Navbar.android';
import {Navbar as NavbarIOS} from './Navbar.ios';

export const Navbar = Platform.OS === 'ios' ? NavbarIOS : NavbarAndroid;
