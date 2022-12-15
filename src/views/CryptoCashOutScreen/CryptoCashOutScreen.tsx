import React from 'react';
import { Header, Input, Button, Text } from '@rneui/themed';
import { View } from 'react-native';

import { useThemeAwareObject } from '../../hooks/useThemeAwareObject';
import { useTheme } from '../../context/themeContext';
import { MainStackScreenProps } from '../../navigation/mainStack';
import { ars } from '../../utils/mockData';
import { amountFormatter } from '../../utils/currencies';
import { Loading } from '../../components/atoms/Loading/Loading';

import { createStyles } from './CryptoCashOutScreen.styles';
import { useCryptoCashout } from './CryptoCashOutScreen.hooks';
import { CryptoCashOut } from './CryptoCashOutScreen.strings';

export const CryptoCashOutScreen: React.FC<
  MainStackScreenProps<'CryptoCashout'>
> = ({ route }) => {
  const fiatCurrency = ars;
  const currency = route.params.currency;
  const styles = useThemeAwareObject(createStyles);
  const { theme } = useTheme();
  const {
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
  } = useCryptoCashout(currency);

  return (
    <>
      <View style={styles.flex1}>
        <Header
          leftComponent={{
            icon: 'arrow-back',
            color: theme.onPrimary,
            onPress: onGoBack,
          }}
          centerComponent={{ text: currency.name, style: styles.headerTitle }}
        />
        <View style={styles.container}>
          <Input
            label={CryptoCashOut.addressLabel}
            inputStyle={styles.input}
            rightIcon={{
              name: 'content-paste',
              type: 'material-icons',
              color: theme.onSurface,
              size: 20,
              onPress: () => {
                onPasteAddress();
              },
            }}
            value={address}
            errorMessage={addressError}
            onChangeText={onAddressChange}
          />
        </View>

        <View style={[styles.container, styles.alignCenter]}>
          <View style={styles.inputContainer}>
            <Input
              keyboardType="decimal-pad"
              containerStyle={styles.flex1}
              label={CryptoCashOut.amountLabel}
              inputStyle={styles.input}
              value={amount}
              numberOfLines={1}
              errorMessage={amountError}
              onChangeText={onAmountChange}
            />
            <Text style={styles.input}>{currency.ticker}</Text>
          </View>

          {!!amountFiat && (
            <Text h4 h4Style={styles.fiatBalance} numberOfLines={1}>
              {`≈ ${amountFormatter({
                value: amountFiat,
                currency: fiatCurrency,
              })}`}{' '}
              {fiatCurrency.ticker}
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <Text style={styles.fee}>
            {CryptoCashOut.fee}
            {fee ? amountFormatter({ value: fee, currency }) : '-'}
          </Text>
        </View>
        <View style={styles.flex1} />
        <Button
          disabled={!cashoutValid || loading}
          title={CryptoCashOut.send}
          buttonStyle={styles.button}
          onPress={onCashout}
        />
      </View>
      {loading && <Loading />}
    </>
  );
};
