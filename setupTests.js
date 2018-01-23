// Setup react 16 adapter for enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

// Mock TouchableNativeFeedback
import {TouchableNativeFeedback} from 'react-native';
TouchableNativeFeedback.SelectableBackground = jest.fn();
