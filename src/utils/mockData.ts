import { Currency } from '../types/currency';

export const bitcoin: Currency = {
  scale: 8,
  name: 'Bitcoin',
  ticker: 'BTC',
  icon: 'bitcoin',
  iconColor: '#F7931A',
  cashInEnabled: false,
  cashOutEnabled: true,
};


export const ars: Currency = {
  scale: 2,
  name: 'Pesos Argentinos',
  ticker: 'ARS',
  icon: '',
  iconColor: '',
  cashInEnabled: false,
  cashOutEnabled: false,
};

