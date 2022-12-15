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
    alignCenter: {
      alignItems: 'center',
    },
    container: {
      padding: Spacing.space16,
      marginHorizontal: Spacing.space8,
      marginVertical: Spacing.space20,
      borderRadius: 8,
      backgroundColor: theme.surface,
    },
    fiatBalance: {
      marginTop: Spacing.space8,
      color: theme.onSurface,
    },
    inputContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    input: {
      padding: Spacing.space12,
      fontSize: 32,
      color: theme.onSurface,
      textAlign: 'center',
    },
    fee: {
      ...Typography.BODY,
      color: theme.onSurface,
    },
    button: {
      ...Typography.H3,
      color: theme.onPrimary,
      borderWidth: 0,
      borderRadius: 30,
      marginBottom: Spacing.bottom,
      marginTop: Spacing.space30,
      marginHorizontal: Spacing.space16,
    },
  });
  return styles;
};
