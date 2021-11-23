import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Patient } from '../../patient/models/patient';
import { PatientSearchComponent } from '../../patient/patient-search/patient-search.component';
import { Study } from '../models/study';

@Component({
  selector: 'app-study-create',
  templateUrl: './study-create.component.html',
  styleUrls: ['./study-create.component.scss']
})
export class StudyCreateComponent implements OnInit {

  public selectedPatient: Patient = new Patient();
  public studyForm:FormGroup;
  public loading:boolean = false;
  public study:Study = new Study();

  constructor( private searchPatientDialog:MatDialog) { }

  ngOnInit(): void {
    this.studyForm = new FormGroup({});
  }

  openSearchPatientDialog() {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      let dialogRef = this.searchPatientDialog.open(PatientSearchComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(data=> this.selectedPatient = data);
  }
  createStudy() {

  }
}
