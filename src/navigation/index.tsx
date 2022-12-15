import React from 'react';
import { StatusBar } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import { useTheme } from '../context/themeContext';

import { AppStackParamList } from './navTypes';
import { MainStack } from './mainStack';

const Stack = createStackNavigator<AppStackParamList>();

export const Navigation = () => {
  const { theme, isDarkMode } = useTheme();

  return (
    <NavigationContainer
      theme={{
        dark: isDarkMode,
        colors: {
          ...DefaultTheme.colors,
          background: theme.background,
        },
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor={theme.surface}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: true,
          cardStyle: { backgroundColor: theme.background },
          ...TransitionPresets.ModalPresentationIOS,
        }}>
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};
