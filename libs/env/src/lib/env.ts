import { InjectionToken } from '@angular/core';

export type Env = {
  production: boolean;
  API_URL: string;
};

export const ENV = new InjectionToken<Env>('Environment');
