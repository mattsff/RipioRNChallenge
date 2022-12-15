export interface ITheme {
  id: EThemeType;
  primary: string;
  onPrimary: string;
  surface: string;
  onSurface: string;
  onSurfaceVariant: string;
  background: string;
  onBackground: string;
  notification: NotificationColors;
}

type NotificationColors = {
  error: string;
  onError: string;
  success: string;
  onSuccess: string;
};

export enum EThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}
