import { Inject, Injectable } from '@angular/core';
import { Env, ENV } from '@starter/env';
import { HttpClient } from '@angular/common/http';
import { Product } from '@starter/model';

const API_PATH = 'products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly uri: string = `${this.env.API_URL}/${API_PATH}`;

  constructor(@Inject(ENV) private env: Env, private http: HttpClient) {}

  getProducts(page: number, limit: number = this.env.PRODUCT_DEFAULT_LIMIT) {
    return this.http.get<Product[]>(this.uri);
  }
}
