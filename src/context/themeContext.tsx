import React from 'react';
import { useColorScheme } from 'react-native';

import { ITheme, LightTheme, DarkTheme } from '../styles/theming';

import { createCtx } from './createCtx';

// Our context provider will provide this object shape
type TThemeContextState = {
  theme: ITheme;
  isDarkMode: boolean;
};

type TThemeContext = TThemeContextState & {};

const [useContext, ThemeContextProvider] =
  createCtx<TThemeContext>('themeContext');

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>(({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = isDarkMode ? DarkTheme : LightTheme;
  const [themeCtxState] = React.useState<TThemeContextState>({
    theme,
    isDarkMode,
  });

  const MemoizedValue = React.useMemo(() => {
    const value: TThemeContext = {
      ...themeCtxState,
    };
    return value;
  }, [themeCtxState]);

  return (
    <ThemeContextProvider value={MemoizedValue}>
      {children}
    </ThemeContextProvider>
  );
});

export const useTheme = useContext;
