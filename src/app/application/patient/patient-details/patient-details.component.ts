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
      contactName: new FormControl(this.selectedPatient.contact.name, [Validators.required, Validators.maxLength(60)]),
      contactEmail: new FormControl(this.selectedPatient.contact.email, [Validators.required, Validators.maxLength(60), Validators.email]),
      contactPhone: new FormControl(this.selectedPatient.contact.phoneNumber, [Validators.required,  Validators.maxLength(12)]),
    });
  }

  private getPatient(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.patientService.get(id).subscribe((data) => {this.selectedPatient = data;
        this.selectedPatient.birthDate = new Date(this.selectedPatient.birthDate);
        // transform date to start of day
        this.selectedPatient.birthDate.setTime( this.selectedPatient.birthDate.getTime() + this.selectedPatient.birthDate.getTimezoneOffset()*60*1000 );
      });
    }
  }

  public redirectToUpdate(id:number) {
    let url: string = `app/patient/edit/${id}`;
    this.router.navigate([url]);
  }
}
