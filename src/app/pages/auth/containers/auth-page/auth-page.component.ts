import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { routes } from '../../../../consts';
import { Credentials } from '../../models/credentials';
import { PatientRegister } from '../../models/patient-register';
import { ApiService } from '../../services/api.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;
  public loginError: boolean = false;
  public signupError: boolean = false;
  public errorMessage: string = '';
  private dialogConfig: MatDialogConfig;

  constructor(
    private service: AuthService,
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public sendLoginForm(credentials: Credentials): void {
    this.service.login(credentials).subscribe({
      next: (success) => {
        if (success)
          this.router.navigate(['app']);
        else
          this.loginError = true;
      },
      error: (error) => this.loginError = true,
    });
  }

  public sendSignupForm(patientRegister: PatientRegister): void {
    this.apiService.registerPatient(patientRegister).subscribe((data) => {
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      dialogRef.afterClosed()
        .subscribe(result => {
          this.router.navigate(['']);
        });
    },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.signupError = true;
      });
  }

}
