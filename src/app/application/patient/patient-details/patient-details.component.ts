import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HealthInsurance } from '../../health-insurance/models/health-insurance';
import { HealthInsuranceService } from '../../health-insurance/services/health-insurance.service';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {


  public patientForm: FormGroup;
  public selectedPatient: Patient = new Patient();
  loading = false;
  public younger:boolean;

  constructor(private router: Router, private patientService: PatientService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatient();
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
      phone: new FormControl(this.selectedPatient.phoneNumber, [ Validators.maxLength(12)]),
      guardianFirstName: new FormControl(this.selectedPatient.guardian.firstName, [ Validators.maxLength(60)]),
      guardianLastName: new FormControl(this.selectedPatient.guardian.lastName, [Validators.maxLength(60)]),
      guardianAddress: new FormControl(this.selectedPatient.guardian.address, [Validators.maxLength(60)]),
      guardianEmail: new FormControl(this.selectedPatient.guardian.email, [Validators.maxLength(60), Validators.email]),
      guardianPhone: new FormControl(this.selectedPatient.guardian.phoneNumber, [ Validators.maxLength(12)]),
    });
  }

  private getPatient(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.patientService.get(id).subscribe((data) => {this.selectedPatient = data;
        this.selectedPatient.birthDate = new Date(this.selectedPatient.birthDate);
        // transform date to start of day
        this.selectedPatient.birthDate.setTime( this.selectedPatient.birthDate.getTime() + this.selectedPatient.birthDate.getTimezoneOffset()*60*1000 );
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

  public redirectToUpdate(id:number) {
    let url: string = `app/patient/edit/${id}`;
    this.router.navigate([url]);
  }
}
