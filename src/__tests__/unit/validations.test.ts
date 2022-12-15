import { CryptoNetwork } from 'src/types/currency';
import { validateCryptoAddress } from 'src/utils/validations';

const validAddresses = [
  {
    network: CryptoNetwork.BTC,
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  },
];

const invalidAddresses = [
  {
    network: CryptoNetwork.BTC,
    address: '',
  },
  {
    network: CryptoNetwork.BTC,
    address: '0xe259ee56f5d07b346a9015da08b8de01e31798f5',
  },
];

describe('validateCryptoAddress', () => {
  validAddresses.forEach((data) => {
    test(`when the address is valid`, () => {
      expect(validateCryptoAddress(data.address, data.network)).toEqual(true);
    });
  });

  invalidAddresses.forEach((data) => {
    test(`when the address is invalid`, () => {
      expect(validateCryptoAddress(data.address, data.network)).toEqual(false);
    });
  });
});
