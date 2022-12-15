import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';

import { useWallets } from '../../context/walletsContext';
import { MainStackNavigationProp } from '../../navigation/mainStack';
import { Currency } from '../../types/currency';
import { Transaction } from '../../types/transaction';

export const useCryptoDetailScreenState = (currency: Currency) => {
  const navigation = useNavigation<MainStackNavigationProp<'CryptoDetails'>>();
  const {
    wallets,
    exchangeRates,
    getWallets,
    getExchangeRates,
    getCommissions,
  } = useWallets();

  const wallet = useMemo(() => {
    return wallets.find((item) => item.currency.ticker === currency.ticker);
  }, [currency.ticker, wallets]);

  const fiatBalance = useMemo(() => {
    if (exchangeRates && wallet?.balance) {
      return exchangeRates.buy * wallet?.balance;
    }
  }, [wallet, exchangeRates]);

  const onCashout = () => {
    navigation.navigate('CryptoCashout', {
      currency,
    });
  };

  const onTransactionDetails = (transaction: Transaction) => {
    navigation.navigate('TransactionDetails', {
      transaction,
    });
  };

  useFocusEffect(
    useCallback(() => {
      getWallets();
      getExchangeRates();
      getCommissions();
    }, [getCommissions, getExchangeRates, getWallets]),
  );

  return {
    balance: wallet?.balance,
    fiatBalance,
    transactions: wallet?.transactions,
    onCashout,
    onTransactionDetails,
  };
};
