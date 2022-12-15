import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, Text } from '@rneui/themed';
import { View } from 'react-native';

import { useThemeAwareObject } from '../../hooks/useThemeAwareObject';
import { MainStackScreenProps } from '../../navigation/mainStack';
import { useTheme } from '../../context/themeContext';

import { createStyles } from './TransactionDetailsScreen.styles';
import { TransactionDetailsStrings } from './TransactionDetailsScreen.strings';
import { useTransactionDetails } from './TransactionDetailsScreen.hooks';

export const TransactionDetailsScreen: React.FC<
  MainStackScreenProps<'TransactionDetails'>
> = ({ route }) => {
  const transaction = route.params.transaction;
  const styles = useThemeAwareObject(createStyles);
  const { theme } = useTheme();

  const { transactionData, onGoBack } = useTransactionDetails(transaction);

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: theme.onPrimary,
          onPress: onGoBack,
        }}
        centerComponent={{
          text: TransactionDetailsStrings.title,
          style: styles.headerTitle,
        }}
      />
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {transactionData.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
