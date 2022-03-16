import { Env } from '@starter/env';
import { ENVIRONMENT_DEFAULTS } from './environment.default';

export const environment: Env = {
  ...ENVIRONMENT_DEFAULTS,
  production: true,
  API_URL: 'FIX_ME',
};
