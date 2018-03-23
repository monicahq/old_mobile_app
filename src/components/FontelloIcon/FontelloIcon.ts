import {createIconSetFromFontello} from 'react-native-vector-icons';
// tslint:disable-next-line:no-var-requires
const fontelloConfig = require('./config.json');
export const FontelloIcon = createIconSetFromFontello(fontelloConfig);
