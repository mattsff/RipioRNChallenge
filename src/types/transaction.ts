import { Currency } from './currency';
import { Status } from './status';

export type Transaction = {
  id: string;
  currency: Currency;
  date: string;
  amount: number;
  destination: string;
  status: Status;
  fee: number;
};
