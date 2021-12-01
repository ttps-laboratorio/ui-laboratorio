import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Patient } from '../../patient/models/patient';
import { PatientSearchComponent } from '../../patient/patient-search/patient-search.component';
import { PatientService } from '../../patient/services/patient.service';
import { ReferringDoctor } from '../../referring-doctor/models/referring-doctor';
import { ReferringDoctorService } from '../../referring-doctor/services/referring-doctor.service';
import { PresumptiveDiagnosis } from '../models/presumptive-diagnosis';
import { Study } from '../models/study';
import { StudyType } from '../models/study-type';
import { PresumptiveDiagnosisService } from '../services/presuntive-diagnosis.service';
import { StudyTypeService } from '../services/study-type.service';
import { StudyService } from '../services/study.service';

@Component({
  selector: 'app-study-create',
  templateUrl: './study-create.component.html',
  styleUrls: ['./study-create.component.scss']
})
export class StudyCreateComponent implements OnInit {

  public selectedPatient: Patient = new Patient();
  public studyForm: FormGroup;
  // public patientFormGroup: FormGroup;
  public loading: boolean = false;
  public study: Study = new Study();
  public presumptiveDiagnosisList: PresumptiveDiagnosis[];
  public studyTypeList: StudyType[];
  public referringDoctorList: ReferringDoctor[];
  private dialogConfig: MatDialogConfig;

  constructor(private searchPatientDialog: MatDialog,
    private dialog: MatDialog,
    private router: Router,
    private patientService: PatientService,
    private studyService: StudyService,
    private presumptiveDiagnosisService: PresumptiveDiagnosisService,
    private referringDoctorService: ReferringDoctorService,
    private errorService:ErrorHandlerService,
    private studyTypeService: StudyTypeService) { }

  ngOnInit(): void {
    this.studyForm = new FormGroup({
      studyType: new FormControl(this.study.studyType.id, [Validators.required]),
      presumptiveDiagnosis: new FormControl(this.study.presumptiveDiagnosis.id, [Validators.required]),
      referringDoctor: new FormControl(this.study.referringDoctor.id, [Validators.required]),
      budget: new FormControl(this.study.budget, [Validators.required]),
      extractionAmount: new FormControl(this.study.extractionAmount, [Validators.required]),
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
    // this.patientFormGroup = new FormGroup({});
    this.presumptiveDiagnosisService.getAll().subscribe(data => this.presumptiveDiagnosisList = data);
    this.studyTypeService.getAll().subscribe(data => this.studyTypeList = data);
    this.referringDoctorService.getAll().subscribe(data => this.referringDoctorList = data);
  }

  openSearchPatientDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialogRef = this.searchPatientDialog.open(PatientSearchComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => this.selectedPatient = data);
  }

  createStudy() {
    this.study.patient = this.selectedPatient;
    this.patientService.createStudy(this.study.patient.id, this.study).subscribe((data) => {
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      dialogRef.afterClosed()
        .subscribe(result => {
          this.router.navigate(['/app/study/list']);
        });
    }, (error => {
      this.errorService.dialogConfig = { ...this.dialogConfig };
      this.errorService.handleError(error);
    }));
  }

  decimalFilter(event: any) {
    const reg = /^-?\d*(\.\d{0,2})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!reg.test(input)) {
      event.preventDefault();
    }
  }
}
