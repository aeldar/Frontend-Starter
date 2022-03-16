import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Env, ENV } from '@starter/env';
import { User } from '@starter/model';

const API_PATH = 'users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly uri: string = `${this.env.API_URL}/${API_PATH}`;

  constructor(@Inject(ENV) private env: Env, private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.uri);
  }
}
