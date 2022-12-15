import React, { useCallback, useEffect, useState } from 'react';

import { Fee } from '../types/fee';
import { ExchangeRates } from '../types/exchangeRates';
import { Wallet } from '../types/wallet';
import { bitcoin } from '../utils/mockData';
import { ripioApiProvider } from '../providers/apiProvider/ripioApiProvider';
import { feesApiProvider } from '../providers/apiProvider/feesApiProvider';

import { createCtx } from './createCtx';

interface WalletsContext extends WalletsContextState {
  getWallets: () => void;
  getExchangeRates: () => Promise<void>;
  getCommissions: () => Promise<void>;
  setWallets: (wallets: Wallet[]) => void;
  setInitialState: () => void;
}

interface WalletsContextState {
  wallets: Wallet[];
  exchangeRates?: ExchangeRates; // TODO: Support multiples currencies
  fees?: Fee; // TODO: Support multiples currencies
}

const INITIAL_STATE: WalletsContextState = {
  wallets: [],
  exchangeRates: undefined,
  fees: undefined,
};

const [useContext, WalletsContextProvider] =
  createCtx<WalletsContext>('walletsContext');

interface Props {
  children?: React.ReactNode;
}

export const WalletsProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<WalletsContextState>(INITIAL_STATE);

  const getWallets = useCallback(() => {
    // Using mock data instead of getting this from network
    const walletBtc: Wallet = {
      currency: bitcoin,
      balance: 5,
      transactions: [],
    };
    setState((prevState) => ({ ...prevState, wallets: [walletBtc] }));
  }, []);

  const getExchangeRates = useCallback(async () => {
    const { data, error } = await ripioApiProvider.getRates();

    if (data && !error) {
      const exchangeRates: ExchangeRates = {
        sell: data.rates.ARSSELL,
        buy: data.rates.ARSBUY,
      };
      setState((prevState) => ({ ...prevState, exchangeRates: exchangeRates }));
    }
  }, []);

  const getCommissions = useCallback(async () => {
    const { data, error } = await feesApiProvider.getBTCFees();

    if (data && !error) {
      const fees: Fee = {
        network: 'BTC',
        amount: data.fastestFee,
      };
      setState((prevState) => ({ ...prevState, fees: fees }));
    }
  }, []);

  const setWallets = useCallback((wallets: Wallet[]) => {
    setState((prevState) => ({ ...prevState, wallets }));
  }, []);

  const setInitialState = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  return (
    <WalletsContextProvider
      value={{
        wallets: state.wallets,
        exchangeRates: state.exchangeRates,
        fees: state.fees,
        getWallets,
        getExchangeRates,
        getCommissions,
        setWallets,
        setInitialState,
      }}>
      {children}
    </WalletsContextProvider>
  );
};

export const useWallets = useContext;
