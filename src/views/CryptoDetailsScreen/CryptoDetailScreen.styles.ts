import { StyleSheet } from 'react-native';

import { Spacing, Typography } from '../../styles';
import { ITheme } from '../../styles/theming';

export const createStyles = (theme: ITheme) => {
  const styles = StyleSheet.create({
    headerTitle: {
      ...Typography.H2,
      color: theme.onPrimary,
    },
    topContainer: {
      paddingVertical: Spacing.space30,
      paddingHorizontal: Spacing.space16,
      alignItems: 'center',
      backgroundColor: theme.surface,
    },
    balanceContainer: { flexDirection: 'row', alignItems: 'center' },
    balance: {
      marginStart: Spacing.space8,
      color: theme.onSurface,
    },
    fiatBalance: {
      marginTop: Spacing.space8,
      color: theme.onSurface,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: Spacing.space16,
      borderRadius: 16,
      marginHorizontal: Spacing.space8,
      marginVertical: Spacing.space20,
      backgroundColor: theme.surface,
    },
    buttonText: {
      color: theme.onPrimary,
      ...Typography.H3,
    },
    button: {
      marginHorizontal: Spacing.space8,
      minWidth: 120,
      backgroundColor: theme.primary,
      borderWidth: 0,
      borderRadius: 30,
    },
    bottomContainer: {
      padding: Spacing.space16,
      borderRadius: 16,
      marginHorizontal: Spacing.space8,
      marginVertical: Spacing.space20,
      backgroundColor: theme.surface,
    },
    transactionsTitle: {
      color: theme.onSurface,
    },
    emptyStateContainer: {
      height: 200,
      justifyContent: 'center',
    },
    emptyLabel: {
      ...Typography.BODY,
      color: theme.onSurface,
      textAlign: 'center',
    },
    itemContainer: {
      backgroundColor: theme.surface,
    },
    itemTitle: {
      color: theme.onSurface,
    },
    itemSubtitle: {
      color: theme.onSurfaceVariant,
    },
  });
  return styles;
};
