import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { routes } from '../../../../consts';
import { Credentials } from '../../models/credentials';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;
  public loginError:boolean = false;

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  public sendLoginForm(credentials:Credentials): void {
    this.service.login(credentials).subscribe({
      next:(success) => {
        if (success)
          this.router.navigate([this.routers.DASHBOARD]);
        else
        this.loginError=!success;
      },
      error:(error) => this.loginError=true
    });
  }

}
