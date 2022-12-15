import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import moment from 'moment';

import { MainStackNavigationProp } from '../../navigation/mainStack';
import { amountFormatter } from '../../utils/currencies';
import { Status } from '../../types/status';
import { Transaction } from '../../types/transaction';
import { useWallets } from '../../context/walletsContext';

import { TransactionDetailsStrings } from './TransactionDetailsScreen.strings';

export const useTransactionDetails = (transaction: Transaction) => {
  const navigation =
    useNavigation<MainStackNavigationProp<'TransactionDetails'>>();
  const { getWallets, getExchangeRates, getCommissions } = useWallets();

  const transactionData = [
    {
      label: TransactionDetailsStrings.id,
      value: transaction.id,
    },
    {
      label: TransactionDetailsStrings.date,
      value: moment(transaction.date).format('DD/MM/YYYY'),
    },
    {
      label: TransactionDetailsStrings.destination,
      value: transaction.destination,
    },
    {
      label: TransactionDetailsStrings.amount,
      value: `${amountFormatter({
        value: transaction.amount,
        currency: transaction.currency,
      })} ${transaction.currency.ticker}`,
    },
    {
      label: TransactionDetailsStrings.fee,
      value: `${amountFormatter({
        value: transaction.fee,
        currency: transaction.currency,
      })} ${transaction.currency.ticker}`,
    },
    {
      label: TransactionDetailsStrings.type,
      value: TransactionDetailsStrings.withdraw,
    },
    {
      label: TransactionDetailsStrings.status,
      value:
        transaction.status === Status.SUCCESS
          ? TransactionDetailsStrings.statusSuccess
          : TransactionDetailsStrings.statusFail,
    },
  ];

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      getWallets();
      getExchangeRates();
      getCommissions();
    }, [getCommissions, getExchangeRates, getWallets]),
  );

  return { transactionData, onGoBack };
};
