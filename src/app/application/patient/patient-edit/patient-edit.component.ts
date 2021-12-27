import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HealthInsurance } from '../../health-insurance/models/health-insurance';
import { HealthInsuranceService } from '../../health-insurance/services/health-insurance.service';
import { Guardian } from '../models/guardian';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {


  public patientForm: FormGroup;
  public selectedPatient: Patient = new Patient();
  private dialogConfig: MatDialogConfig;
  public healthInsurances: Array<HealthInsurance> = new Array<HealthInsurance>();
  loading = false;
  public younger = false;

  constructor(private router: Router, private errorService: ErrorHandlerService, private patientService: PatientService, private healthInsuranceService: HealthInsuranceService, private activeRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPatient();
    this.getHealthInsurances();
    this.patientForm = new FormGroup({
      firstName: new FormControl(this.selectedPatient.firstName, [Validators.required, Validators.maxLength(60)]),
      lastName: new FormControl(this.selectedPatient.lastName, [Validators.required, Validators.maxLength(60)]),
      dni: new FormControl(this.selectedPatient.dni, [Validators.required, Validators.maxLength(8)]),
      birthDate: new FormControl(this.selectedPatient.birthDate, [Validators.required]),
      healthInsurance: new FormControl(this.selectedPatient.healthInsurance.id, [Validators.required]),
      affiliateNumber: new FormControl(this.selectedPatient.affiliateNumber),
      clinicHistory: new FormControl(this.selectedPatient.clinicHistory, [Validators.required]),
      address: new FormControl(this.selectedPatient.address, [Validators.maxLength(60)]),
      email: new FormControl(this.selectedPatient.email, [Validators.maxLength(60), Validators.email]),
      phone: new FormControl(this.selectedPatient.phoneNumber, [Validators.maxLength(12)]),
      guardianFirstName: new FormControl(this.selectedPatient.firstName, [Validators.maxLength(60)]),
      guardianLastName: new FormControl(this.selectedPatient.lastName, [Validators.maxLength(60)]),
      guardianAddress: new FormControl(this.selectedPatient.address, [Validators.maxLength(60)]),
      guardianEmail: new FormControl(this.selectedPatient.email, [Validators.maxLength(60), Validators.email]),
      guardianPhone: new FormControl(this.selectedPatient.phoneNumber, [Validators.maxLength(12)]),
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  private getPatient(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.patientService.get(id).subscribe((data) => {
        this.selectedPatient = data;
        if (!this.selectedPatient.guardian)
          this.selectedPatient.guardian = new Guardian();
        this.selectedPatient.birthDate = new Date(this.selectedPatient.birthDate);
        // transform date to start of day
        this.selectedPatient.birthDate.setTime(this.selectedPatient.birthDate.getTime() + this.selectedPatient.birthDate.getTimezoneOffset() * 60 * 1000);
        this.younger = this.isYounger(this.selectedPatient.birthDate);
      });
    }
  }

  private isYounger(birthDate: Date): boolean {
    if (birthDate == null || birthDate == undefined)
        return false;
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age < 18;
}

  private getHealthInsurances(): void {
    this.healthInsuranceService.getAll().subscribe((data) => this.healthInsurances = data);
  }

  public handleBirthDateChange(): void {
    this.younger = this.isYounger(this.selectedPatient.birthDate);
  }

  updatePatient() {
    if (!this.patientForm.valid)
      return;
    let patientCopy: Patient = cloneDeep(this.selectedPatient);
    if (!this.younger) {
      patientCopy.guardian = null;
    }else{
      patientCopy.address = null;
      patientCopy.email = null;
      patientCopy.phoneNumber = null;
    }
    if (this.selectedPatient.id !== undefined) {
      this.patientService.update(patientCopy).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/patient/list']);
          });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }));
    } else {
      this.patientService.create(patientCopy).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/patient/list']);
          });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }));
    }
  }

  editPatient(selectedPatient: Patient) {
    this.selectedPatient = selectedPatient;
  }

  clearPatient() {
    this.selectedPatient = new Patient();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.patientForm.controls[controlName].hasError(errorName);
  }

  // public dateValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const today = new Date().getTime();

  //     if (!(control && control.value)) {
  //       // if there's no control or no value, that's ok
  //       return null;
  //     }

  //     // return null if there's no errors
  //     return control.value.getTime() > today
  //       ? { invalidDate: 'No se puede elegir una fecha posterior a hoy' }
  //       : null;
  //   }
  //}


}
