import { Component, OnInit } from '@angular/core';
import { Study } from '../models/study';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { StudyService } from '../services/study.service';
import { Patient } from '../../patient/models/patient';
import { PatientService } from '../../patient/services/patient.service';
import { Extractionist } from '../models/extractionist';
import { ExtractionistService } from '../services/extractionist.service';


@Component({
  selector: 'app-study-create',
  templateUrl: './study-create.component.html',
  styleUrls: ['./study-create.component.scss']
})
export class StudyCreateComponent implements OnInit {

  public studyForm: FormGroup;
  public selectedStudy: Study = new Study();
  private dialogConfig: MatDialogConfig;
  public patients: Array<Patient> = new Array<Patient>();
  public extractionists: Array<Extractionist> = new Array<Extractionist>();

  constructor(private router: Router, private errorService: ErrorHandlerService,  private patientService: PatientService, private extractionistService: ExtractionistService, private studyService: StudyService, private activeRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStudy();
    this.getAllPatients();
    this.getExtractionists();
    this.studyForm = new FormGroup({
      budget: new FormControl(this.selectedStudy.budget, [Validators.required]),
      createdAt: new FormControl(this.selectedStudy.createdAt, [Validators.required]),
      extractionAmount: new FormControl(this.selectedStudy.extractionAmount, [Validators.required]),
      delay: new FormControl(this.selectedStudy.delay),
      paidExtractionAmount: new FormControl(this.selectedStudy.paidExtractionAmount, [Validators.required]),
      appointment: new FormControl(this.selectedStudy.appointment.id, [Validators.required]),
      extractionist: new FormControl(this.selectedStudy.extractionist.id, [Validators.required]),
      patient: new FormControl(this.selectedStudy.patient.id, [Validators.required]),
      presumptiveDiagnosis: new FormControl(this.selectedStudy.presumptiveDiagnosis.id, [Validators.required]),
      referringDoctor: new FormControl(this.selectedStudy.referringDoctor.id, [Validators.required]),
      type: new FormControl(this.selectedStudy.type.id, [Validators.required]),
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    };
  }

  private getAllPatients(): void {
    this.patientService.getAll().subscribe((data) => this.patients = data);
  }
  private getExtractionists(): void {
    this.extractionistService.getAll().subscribe((data) => this.extractionists = data);
  }


  private getStudy(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.studyService.get(id).subscribe((data) => {this.selectedStudy = data;
        this.selectedStudy.createdAt = new Date(this.selectedStudy.createdAt);
        this.selectedStudy.createdAt.setTime( this.selectedStudy.createdAt.getTime() + this.selectedStudy.createdAt.getTimezoneOffset()*60*1000 );
      });
    }
    // else {
    
  }

  updateStudy() {
    if (!this.studyForm.valid)
      return;
    if (this.selectedStudy.id !== undefined) {
      this.studyService.update(this.selectedStudy).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/study/list']);
          });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }));
    } else {
      this.studyService.create(this.selectedStudy).subscribe((data) => {
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
  }

  editStudy(selectedStudy: Study) {
    this.selectedStudy = selectedStudy;
  }

  clearStudy() {
    this.selectedStudy = new Study();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.studyForm.controls[controlName].hasError(errorName);
  }

}
