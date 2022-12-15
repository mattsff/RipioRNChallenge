import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import { CryptoNetwork, Currency } from '../../types/currency';
import { validateCryptoAddress } from '../../utils/validations';
import { MainStackNavigationProp } from '../../navigation/mainStack';
import { useWallets } from '../../context/walletsContext';
import { satoshisToBTC } from '../../utils/convertions';
import { Status } from '../../types/status';
import { Transaction } from '../../types/transaction';

import { CryptoCashOut } from './CryptoCashOutScreen.strings';

export const useCryptoCashout = (currency: Currency) => {
  const navigation = useNavigation<MainStackNavigationProp<'CryptoDetails'>>();
  const [address, setAddress] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [addressError, setAddressError] = useState<string>();
  const [addressValid, setAddressValid] = useState<boolean>(false);
  const [amountError, setAmountError] = useState<string>();
  const [amountValid, setAmountValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { wallets, exchangeRates, fees, setWallets } = useWallets();

  const onAddressChange = (input: string) => {
    setAddress(input);
    const isAddressValid = validateCryptoAddress(input, CryptoNetwork.BTC);
    setAddressValid(isAddressValid);
    if (isAddressValid) {
      setAddressError(undefined);
    } else {
      setAddressError(CryptoCashOut.invalidAddress);
    }
  };

  const onPasteAddress = async () => {
    const clipboardValue = await Clipboard.getString();
    onAddressChange(clipboardValue);
  };

  const fee = useMemo(() => {
    if (fees?.amount) {
      return satoshisToBTC(fees.amount);
    } else {
      return undefined;
    }
  }, [fees?.amount]);

  const onAmountChange = (input: string) => {
    setAmount(input);

    if (fee && wallet?.balance) {
      const totalAmount = Number(input) + fee;
      const isAmountAvailable = wallet?.balance >= totalAmount;
      setAmountValid(isAmountAvailable);
      if (isAmountAvailable) {
        setAmountError(undefined);
      } else {
        setAmountError(CryptoCashOut.invalidAmount);
      }
    } else {
      setAmountValid(false);
    }
  };

  const wallet = useMemo(() => {
    return wallets.find((item) => item.currency.ticker === currency.ticker);
  }, [currency.ticker, wallets]);

  const amountFiat = useMemo(() => {
    if (exchangeRates && amount) {
      return exchangeRates.buy * Number(amount);
    }
  }, [exchangeRates, amount]);

  const cashoutValid = addressValid && amountValid && fee;

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onCashout = useCallback(() => {
    // Simulate cashout
    setLoading(true);
    setTimeout(() => {
      const success = Math.random() > 0.3;
      let status: Status;
      if (!wallet || !fee) {
        return;
      }

      if (success) {
        Toast.show({
          type: 'success',
          text1: CryptoCashOut.cashoutSuccess,
          position: 'bottom',
        });

        // Update wallet balance
        const totalAmount = Number(amount) + fee;
        wallet.balance = wallet.balance - totalAmount;
        status = Status.SUCCESS;
      } else {
        status = Status.ERROR;

        Toast.show({
          type: 'error',
          text1: CryptoCashOut.cashoutError,
          position: 'bottom',
        });
      }

      // Add transaction
      const transaction: Transaction = {
        id: `${Math.random() * 1000}`,
        date: Date(),
        amount: Number(amount),
        fee,
        status,
        currency,
        destination: address,
      };
      wallet.transactions.push(transaction);
      setWallets(wallets);

      setLoading(false);
      onGoBack();
    }, 2000);
  }, [address, amount, currency, fee, onGoBack, setWallets, wallet, wallets]);

  return {
    loading,
    fee,
    cashoutValid,
    address,
    amount,
    amountFiat,
    addressError,
    amountError,
    onAddressChange,
    onPasteAddress,
    onAmountChange,
    onCashout,
    onGoBack,
  };
};
