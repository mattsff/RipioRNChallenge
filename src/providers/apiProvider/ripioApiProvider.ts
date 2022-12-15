import { keysToCamel } from '../../utils/keysTo';

import { BaseApiProvider } from './BaseApiProvider';
import { RatesResponse } from './types/ratesJson';

class RipioApiProvider extends BaseApiProvider {
  getRates = async () => {
    const { data, status, error } = await this.get<RatesResponse>('/v1/rates');
    return { data: keysToCamel(data), status, error };
  };
}

export const ripioApiProvider = new RipioApiProvider({
  apiUrl: 'https://ripio.com/api',
});
