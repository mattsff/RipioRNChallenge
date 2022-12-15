import { Currency } from './currency';
import { Transaction } from './transaction';

export type Wallet = {
  currency: Currency;
  balance: number;
  transactions: Transaction[];
};
