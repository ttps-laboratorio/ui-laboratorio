import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { User } from '../models';
import { Credentials } from '../models/credentials';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService, private jwtService: JwtService) { }

  public get userToken(): string {
    return localStorage.getItem('usertoken');
  }

  public get user(): User {
    if (this.userToken != null)
      return new User(JSON.parse(localStorage.getItem('user-info')));
    return null;
  }

  public login(credentials: Credentials): Subject<Boolean> {
    let response: Subject<Boolean> = new Subject();
    this.apiService.login(credentials).subscribe(
      (data) => {
        localStorage.setItem('usertoken', data.token);
        this.userInfo().subscribe(
          (data) => { response.next(true) },
          (error) => { response.next(false) }
        );
      },
      (error) => { response.next(false) });
    return response;
  }

  public userInfo(): Subject<Boolean> {
    let response: Subject<Boolean> = new Subject();
    this.apiService.userInfo().subscribe(
      (data) => {
        let user: User = new User(data);
        localStorage.setItem('user-info', JSON.stringify(user));
        response.next(true);
      },
      (error) => { response.next(false) });
    return response;
  }

  public logout() {
    this.clearTokens();
  }

  private clearTokens() {
    localStorage.removeItem('user-info');
    localStorage.removeItem('usertoken');
  }

  public signOut(): void {
    this.logout();
  }

  public getUser(): Observable<User> {
    return of(this.user);
  }
}
