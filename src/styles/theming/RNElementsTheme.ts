import { createTheme } from '@rneui/themed';

import { DarkTheme } from './DarkTheme';
import { LightTheme } from './LightTheme';

export const RNElementsTheme = createTheme({
  lightColors: {
    primary: LightTheme.primary,
    background: LightTheme.background,
    success: LightTheme.notification.success,
    error: LightTheme.notification.error,
  },
  darkColors: {
    primary: DarkTheme.primary,
    background: DarkTheme.background,
    success: DarkTheme.notification.success,
    error: DarkTheme.notification.error,
  },
  mode: 'light',
});
