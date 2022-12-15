import { Platform, TextStyle } from 'react-native';

export type TTypography = 'H1' | 'H2' | 'H3' | 'BODY' | 'BODY2' | 'BODY3';

export const getFontWeightByPlatform = (weight: string) =>
  (Platform.OS === 'android' ? 'normal' : weight) as TextStyle['fontWeight'];

export const Typography: Record<TTypography, TextStyle> = {
  H1: {
    fontSize: 24,
    fontWeight: getFontWeightByPlatform('bold'),
    fontStyle: 'normal',
    lineHeight: 42,
    letterSpacing: 0,
  },
  H2: {
    fontSize: 20,
    fontWeight: getFontWeightByPlatform('bold'),
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  H3: {
    fontSize: 18,
    fontWeight: getFontWeightByPlatform('600'),
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  BODY: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  BODY2: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  BODY3: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
  },
};
