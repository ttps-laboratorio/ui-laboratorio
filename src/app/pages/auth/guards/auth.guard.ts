import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { routes } from '../../../consts';
import { AuthService } from '../services';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{
  public routers: typeof routes = routes;

  constructor(private router: Router, private authService:AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user: User = this.authService.user;
    if (user && next.data && next.data.permissions) {
      for(let i=0;i<next.data.permissions.length;i++) {
        let permission = next.data.permissions[i];
        if (user.canActivate(permission)) {
          return true;
        }
      };
    }
    this.router.navigate([routes.LOGIN]);
    return false;
  }
}
