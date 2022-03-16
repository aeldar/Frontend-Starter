import { Inject, Injectable } from '@angular/core';
import { Env, ENV } from '@starter/env';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '@starter/model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly uri: string = `${this.env.API_URL}/${this.env.PRODUCTS_API_PATH}`;

  constructor(@Inject(ENV) private env: Env, private http: HttpClient) {}

  getProducts(pageIndex: number = 0, limit: number = this.env.PRODUCTS_DEFAULT_LIMIT) {
    let params = new HttpParams().set('_limit', limit);
    if (pageIndex) {
      params = params.set('_page', pageIndex + 1);
    }
    return this.http.get<Product[]>(this.uri, { params });
  }
}
