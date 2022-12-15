import { Currency } from '../types/currency';
import { Transaction } from '../types/transaction';

export const mockCurrency: Currency = {
  scale: 8,
  name: 'Bitcoin',
  ticker: 'BTC',
  icon: 'bitcoin',
  iconColor: '#F7931A',
  cashInEnabled: false,
  cashOutEnabled: true,
};

export const mockTransaction: Transaction = {
  id: '0',
  currency: mockCurrency,
  date: '01/01/2022',
  amount: 5.0005,
  destination: '3Mgwp1XyHNPC651JB1kzFUni8MziFk8Hi4',
  status: 0,
  fee: 0.00001,
};
