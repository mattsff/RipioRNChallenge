import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
  TransitionPresets,
} from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import { Currency } from '../types/currency';
import { Transaction } from '../types/transaction';
import { CryptoDetailsScreen } from '../views/CryptoDetailsScreen/CryptoDetailScreen';
import { CryptoCashOutScreen } from '../views/CryptoCashOutScreen/CryptoCashOutScreen';
import { TransactionDetailsScreen } from '../views/TransactionDetailsScreen/TransactionDetailsScreen';

import { AppStackParamList } from './navTypes';

export type MainStackParamList = {
  CryptoDetails: undefined;
  CryptoCashout: {
    currency: Currency;
  };
  TransactionDetails: {
    transaction: Transaction;
  };
};

// Navigation Props for MainStack
export type MainStackNavigationProp<Route extends keyof MainStackParamList> =
  CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, Route>,
    StackNavigationProp<MainStackParamList>
  >;

// Navigation and route props packaged together for MainStack
export type MainStackScreenProps<Route extends keyof MainStackParamList> = {
  navigation: MainStackNavigationProp<Route>;
  route: RouteProp<MainStackParamList, Route>;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack: React.FC<
  StackScreenProps<AppStackParamList, 'MainStack'>
> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="CryptoDetails" component={CryptoDetailsScreen} />
      <Stack.Screen name="CryptoCashout" component={CryptoCashOutScreen} />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailsScreen}
      />
    </Stack.Navigator>
  );
};
