import { NavigationContainer, RouteProp } from '@react-navigation/native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider as ElementsThemeProvider } from '@rneui/themed';

import {
  MainStackNavigationProp,
  MainStackParamList,
} from '../../../navigation/mainStack';
import { WalletsProvider } from '../../../context/walletsContext';
import { TransactionDetailsScreen } from '../../../views/TransactionDetailsScreen/TransactionDetailsScreen';
import { ThemeProvider } from '../../../context/themeContext';
import { RNElementsTheme } from '../../../styles/theming';
import { mockTransaction } from '../../mockData';

const screenWithcustomNavigation = (
  navigate: jest.Mock<any, any>,
  route: RouteProp<MainStackParamList, 'TransactionDetails'>,
) =>
  render(
    <ElementsThemeProvider theme={RNElementsTheme}>
      <ThemeProvider>
        <NavigationContainer>
          <TransactionDetailsScreen
            navigation={
              {
                navigate,
              } as unknown as MainStackNavigationProp<'TransactionDetails'>
            }
            route={route}
          />{' '}
        </NavigationContainer>
      </ThemeProvider>
    </ElementsThemeProvider>,
    {
      wrapper: WalletsProvider,
    },
  );

describe('TransactionDetailsScreen', () => {
  test('snapshot', () => {
    const navigate = jest.fn();

    const route: RouteProp<MainStackParamList, 'TransactionDetails'> = {
      key: '',
      name: 'TransactionDetails',
      params: {
        transaction: mockTransaction,
      },
    };
    screenWithcustomNavigation(navigate, route);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
