import BigNumber from 'bignumber.js';

import { Currency } from '../types/currency';

export const INVALID_AMOUNT = '-';

export const amountFormatter = ({
  value,
  currency,
}: {
  value?: number;
  currency: Currency;
}) => {
  if (value === undefined) {
    return INVALID_AMOUNT;
  }

  const number = new BigNumber(value);
  const numberWithDecimals = number.decimalPlaces(currency.scale).toFixed();
  const [intPart, floatPart] = numberWithDecimals.split('.');

  return `${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}${
    floatPart ? `,${floatPart}` : ''
  }`;
};
