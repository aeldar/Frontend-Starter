import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Env, ENV } from '@starter/env';
import { User } from '@starter/model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly uri: string = `${this.env.API_URL}/${this.env.USERS_API_PATH}`;

  constructor(@Inject(ENV) private env: Env, private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.uri);
  }
}
