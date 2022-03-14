import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MeService } from './me.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  private readonly redirectUrlTree = this.router.createUrlTree(['/hidden/users']);

  constructor(private meService: MeService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.meService.isAuthenticated$.pipe(map((isAuthenticated) => isAuthenticated || this.redirectUrlTree));
  }
}
