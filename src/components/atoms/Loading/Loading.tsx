import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useTheme } from '../../../context/themeContext';

import { createStyles } from './Loading.styles';

export const Loading: React.FC = React.memo(() => {
  const styles = createStyles();
  const { theme } = useTheme();
  return (
    <View style={[styles.loader]}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
});
