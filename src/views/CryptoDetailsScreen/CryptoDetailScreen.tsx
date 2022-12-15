import React, { useCallback } from 'react';
import { Header, Text, Icon, ListItem, Button } from '@rneui/themed';
import { View, FlatList } from 'react-native';
import moment from 'moment';

import { Transaction } from 'src/types/transaction';

import { MainStackScreenProps } from '../../navigation/mainStack';
import { useThemeAwareObject } from '../../hooks/useThemeAwareObject';
import { useTheme } from '../../context/themeContext';
import { ars, bitcoin } from '../../utils/mockData';
import { amountFormatter } from '../../utils/currencies';
import { Status } from '../../types/status';
import { Spacing } from '../../styles';

import { createStyles } from './CryptoDetailScreen.styles';
import { useCryptoDetailScreenState } from './CryptoDetailScreen.hooks';
import { CryptoDetailsStrings } from './CryptoDetailScreen.strings';

export const CryptoDetailsScreen: React.FC<
  MainStackScreenProps<'CryptoDetails'>
> = () => {
  // Receive currency as parameter
  const currency = bitcoin;
  const fiatCurrency = ars;
  const {
    balance,
    fiatBalance,
    transactions,
    onCashout,
    onTransactionDetails,
  } = useCryptoDetailScreenState(currency);
  const { theme } = useTheme();
  const styles = useThemeAwareObject(createStyles);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keyExtractor = useCallback((_: any, index: any) => `${index}`, []);

  const renderItem = useCallback(
    ({ item }: { item: Transaction }) => {
      const icon = item.status === Status.SUCCESS ? 'check' : 'cancel';
      return (
        <ListItem
          bottomDivider
          containerStyle={styles.itemContainer}
          onPress={() => {
            onTransactionDetails(item);
          }}>
          <Icon
            name={icon}
            type="material-icons"
            color={theme.onSurface}
            size={30}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.itemTitle}>
              {amountFormatter({ value: item.amount, currency: item.currency })}{' '}
              {currency.ticker}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.itemSubtitle}>
              {moment(item.date).format('DD/MM/YYYY')}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      );
    },
    [currency.ticker, onTransactionDetails, styles, theme],
  );

  return (
    <View>
      <Header
        centerComponent={{ text: currency.name, style: styles.headerTitle }}
      />
      <View style={styles.topContainer}>
        <View style={styles.balanceContainer}>
          <Icon
            type="font-awesome"
            size={40}
            name={currency.icon}
            color={currency.iconColor}
          />
          <Text h2 h2Style={styles.balance}>
            {amountFormatter({ value: balance, currency })} {currency.ticker}
          </Text>
        </View>
        {!!fiatBalance && (
          <Text h4 h4Style={styles.fiatBalance}>
            {`≈ ${amountFormatter({
              value: fiatBalance,
              currency: fiatCurrency,
            })}`}{' '}
            {fiatCurrency.ticker}
          </Text>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title={CryptoDetailsStrings.deposit}
          icon={{
            name: 'arrow-down',
            type: 'font-awesome',
            size: 15,
            color: theme.onPrimary,
          }}
          disabled={!currency.cashInEnabled}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
        />

        <Button
          title={CryptoDetailsStrings.withdraw}
          icon={{
            name: 'arrow-up',
            type: 'font-awesome',
            size: 15,
            color: theme.onPrimary,
          }}
          disabled={!currency.cashOutEnabled}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          onPress={onCashout}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text h4 h4Style={styles.transactionsTitle}>
          {CryptoDetailsStrings.transactions}
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentInset={{ bottom: Spacing.space40 }}
          data={transactions}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListEmptyComponent={
            <View style={styles.emptyStateContainer}>
              <Text style={styles.emptyLabel}>
                {CryptoDetailsStrings.empty}
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
};
