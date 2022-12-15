import { EThemeType, ITheme } from './ITheme';

export const DarkTheme: ITheme = {
  id: EThemeType.DARK,
  primary: '#7908ff',
  onPrimary: '#FFFFFF',
  surface: '#151515',
  onSurface: '#FFFFFF',
  background: '#000000',
  onSurfaceVariant: '#FDFDFD',
  onBackground: '#FFFFFF',
  notification: {
    error: '#F26262',
    onError: '#FFFFFF',
    success: '#4FD133',
    onSuccess: '#FFFFFF',
  },
};
