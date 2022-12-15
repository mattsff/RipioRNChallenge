import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider as ElementsThemeProvider } from '@rneui/themed';

import { ThemeProvider } from './src/context/themeContext';
import { Navigation } from './src/navigation';
import { RNElementsTheme } from './src/styles/theming';
import { WalletsProvider } from './src/context/walletsContext';

const App = () => {
  return (
    <WalletsProvider>
      <ElementsThemeProvider theme={RNElementsTheme}>
        <ThemeProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </ElementsThemeProvider>
    </WalletsProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
