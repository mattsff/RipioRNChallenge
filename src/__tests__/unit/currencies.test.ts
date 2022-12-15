import { describe, expect } from '@jest/globals';

import { amountFormatter, INVALID_AMOUNT } from 'src/utils/currencies';
import { bitcoin } from 'src/utils/mockData';

const currency = bitcoin;

describe('amountFormatter', () => {
  const inputOutputData: {
    input: { value: number | undefined };
    output: string;
  }[] = [
    {
      input: { value: 0 },
      output: '0',
    },
    {
      input: { value: undefined },
      output: INVALID_AMOUNT,
    },
    {
      input: { value: 1000 },
      output: '1.000',
    },
    {
      input: { value: 0.0005 },
      output: '0,0005',
    },
    {
      input: { value: 1000.0005 },
      output: '1.000,0005',
    },
    {
      input: { value: 0.0 },
      output: '0',
    },
  ];
  inputOutputData.forEach((data) => {
    test('should return the correct format for the input amount', () => {
      expect(
        amountFormatter({
          value: data.input.value,
          currency: currency,
        }),
      ).toEqual(data.output);
    });
  });
});
