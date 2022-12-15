export type Currency = {
  scale: number;
  ticker: string;
  name: string;
  icon: string;
  iconColor: string;
  cashInEnabled: boolean;
  cashOutEnabled: boolean;
};

export enum CryptoNetwork {
  BTC = 'BTC',
}
