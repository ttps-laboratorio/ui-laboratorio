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

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  public sendLoginForm(credentials:Credentials): void {
    console.log(credentials);
    this.service.login(credentials).subscribe(data => this.router.navigate([this.routers.DASHBOARD]).then());

    // this.router.navigate([this.routers.DASHBOARD]).then();
  }

}
