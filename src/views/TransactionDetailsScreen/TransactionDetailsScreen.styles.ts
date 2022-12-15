import { StyleSheet } from 'react-native';

import { Spacing, Typography } from '../../styles';
import { ITheme } from '../../styles/theming';

export const createStyles = (theme: ITheme) => {
  const styles = StyleSheet.create({
    flex1: {
      flex: 1,
    },
    headerTitle: {
      ...Typography.H2,
      color: theme.onPrimary,
    },
    container: {
      padding: Spacing.space16,
      marginHorizontal: Spacing.space8,
      marginVertical: Spacing.space20,
      borderRadius: 8,
      backgroundColor: theme.surface,
    },
    label: {
      ...Typography.H3,
      marginTop: Spacing.space20,
      color: theme.onSurfaceVariant,
    },
    value: {
      ...Typography.BODY,
      marginTop: Spacing.space4,
      color: theme.onSurface,
    },
  });
  return styles;
};
