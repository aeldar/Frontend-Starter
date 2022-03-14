import { User } from '@starter/model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  private readonly currentUser = new BehaviorSubject<User | null>(null);
  readonly currentUser$ = this.currentUser.asObservable().pipe(distinctUntilChanged());
  readonly isAdmin$ = this.currentUser$.pipe(map((user) => user?.role === 'ADMIN'));
  readonly isAuthenticated$ = this.currentUser$.pipe(map((user) => !!user));

  constructor(private router: Router) {}

  impersonate(user: User): void {
    this.currentUser.next(user);
  }

  logOut(): void {
    this.currentUser.next(null);
    this.router.navigateByUrl('/');
  }
}
