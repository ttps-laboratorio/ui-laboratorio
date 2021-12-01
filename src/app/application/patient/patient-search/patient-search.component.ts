import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../models/patient';
import { SearchPatient } from '../models/search-patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {

  public displayedColumns = ['firstName', 'lastName', 'birthDate', 'dni'];
  public dataSource = new MatTableDataSource<Patient>();
  public patientForm: FormGroup;
  public searchPatientModel: SearchPatient = new SearchPatient();
  @Input()
  public selectedPatient : Patient = new Patient();
  loading = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private patientService: PatientService, private matDialogRef:MatDialogRef<PatientSearchComponent>) { }

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      firstName: new FormControl(this.searchPatientModel.firstName),
      lastName: new FormControl(this.searchPatientModel.lastName),
      dni: new FormControl(this.searchPatientModel.dni),
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public customSort = (event) => {
    console.log(event);
  }

  public searchPatients() : void {
    this.patientService.getAll().subscribe((data) => this.dataSource.data=data, (error)=>console.log(error));
  }

  public selectPatient(patient : Patient) {
    this.selectedPatient = patient;
  }

  public clearSearch() : void {
    this.searchPatientModel = new SearchPatient();
    this.selectedPatient = undefined;
    this.dataSource = new MatTableDataSource<Patient>();
  }
  public save(): void{
    this.matDialogRef.close(this.selectedPatient);
  }
  public close(): void{
    this.matDialogRef.close(new Patient());
  }
}
