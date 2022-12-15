import { keysToCamel } from '../../utils/keysTo';

import { BaseApiProvider } from './BaseApiProvider';
import { FeesResponse } from './types/feesJson';

class RipioApiProvider extends BaseApiProvider {
  getBTCFees = async () => {
    const { data, status, error } = await this.get<FeesResponse>(
      '/v1/fees/recommended',
    );
    return { data: keysToCamel(data), status, error };
  };
}

export const feesApiProvider = new RipioApiProvider({
  apiUrl: 'https://bitcoinfees.earn.com/api',
});
