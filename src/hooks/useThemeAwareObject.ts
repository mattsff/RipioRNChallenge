// ThemeAwareObject.hook.tsx
import React from 'react';

import { useTheme } from '../context/themeContext';
import { ITheme } from '../styles/theming';

type Generator<T extends {}> = (theme: ITheme) => T;

const useThemeAwareObject = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useTheme();

  const ThemeAwareObject = React.useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};

export { useThemeAwareObject };
