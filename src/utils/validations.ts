import WAValidator from 'multicoin-address-validator';

import { CryptoNetwork } from 'src/types/currency';

export const validateCryptoAddress = (
  address: string,
  network: CryptoNetwork,
) => {
  return WAValidator.validate(address, network);
};
