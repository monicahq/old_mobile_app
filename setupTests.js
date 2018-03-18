
const mockRnCodePush = () => Component => Component;;
Object.assign(mockRnCodePush, {
  CheckFrequency: 0
})

jest.mock('react-native-code-push', () => mockRnCodePush);

jest.mock('react-native-splash-screen', () => {
  return { 
    hide: jest.fn(),
    show: jest.fn()
  };
});


// Setup react 16 adapter for enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

// Mock TouchableNativeFeedback
import {TouchableNativeFeedback} from 'react-native';
TouchableNativeFeedback.SelectableBackground = jest.fn();


// Feb 14, 2017
Date.now = jest.fn(() => 1487076708000)
