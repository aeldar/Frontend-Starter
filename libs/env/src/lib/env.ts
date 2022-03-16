import { InjectionToken } from '@angular/core';

export type Env = {
  production: boolean;
  API_URL: string;
  PRODUCT_DEFAULT_LIMIT: number;
};

export const ENV = new InjectionToken<Env>('Environment');
