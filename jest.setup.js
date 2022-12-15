// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
import mockClipboard from '@react-native-clipboard/clipboard/jest/clipboard-mock.js';

jest.mock('@react-native-clipboard/clipboard', () => mockClipboard);
