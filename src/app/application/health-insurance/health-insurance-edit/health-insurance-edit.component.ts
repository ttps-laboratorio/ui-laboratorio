import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HealthInsurance } from '../models/health-insurance';
import { HealthInsuranceService } from '../services/health-insurance.service';

@Component({
  selector: 'app-health-insurance-edit',
  templateUrl: './health-insurance-edit.component.html',
  styleUrls: ['./health-insurance-edit.component.scss']
})
export class HealthInsuranceEditComponent implements OnInit {

  public healthInsuranceForm: FormGroup;
  public selectedHealthInsurance: HealthInsurance = new HealthInsurance();
  private dialogConfig: MatDialogConfig;
  loading = false;

  constructor(private router: Router, private errorService:ErrorHandlerService, private healthInsuranceService: HealthInsuranceService, private activeRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getHealthInsurance();
    this.healthInsuranceForm = new FormGroup({
      name: new FormControl(this.selectedHealthInsurance.name, [Validators.required, Validators.maxLength(60)]),
      email: new FormControl(this.selectedHealthInsurance.email, [Validators.required, Validators.email, Validators.maxLength(60)]),
      phoneNumber: new FormControl(this.selectedHealthInsurance.phoneNumber, [Validators.required, Validators.maxLength(12)])
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  private getHealthInsurance(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.healthInsuranceService.get(id).subscribe((data) => this.selectedHealthInsurance = data);
    }
  }

  updateHealthInsurance() {
    if (!this.healthInsuranceForm.valid)
      return;
    if (this.selectedHealthInsurance.id !== undefined) {
      this.healthInsuranceService.update(this.selectedHealthInsurance).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/health-insurance/list']);
          });
      },  (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }));
    } else {
      this.healthInsuranceService.create(this.selectedHealthInsurance).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/health-insurance/list']);
          });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }));
    }
  }

  editHealthInsurance(healthInsurance: HealthInsurance) {
    this.selectedHealthInsurance = healthInsurance;
  }

  clearHealthInsurance() {
    this.selectedHealthInsurance = new HealthInsurance();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.healthInsuranceForm.controls[controlName].hasError(errorName);
  }

}
