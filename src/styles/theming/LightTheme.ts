import { EThemeType, ITheme } from './ITheme';

export const LightTheme: ITheme = {
  id: EThemeType.LIGHT,
  primary: '#7908ff',
  onPrimary: '#FFFFFF',
  surface: '#FFFFFF',
  onSurface: '#242424',
  background: '#F4F4FC',
  onSurfaceVariant: '#6c6c6c',
  onBackground: '#000',
  notification: {
    error: '#EB4D4D',
    onError: '#FFFFFF',
    success: '#2CB80F',
    onSuccess: '#FFFFFF',
  },
};
