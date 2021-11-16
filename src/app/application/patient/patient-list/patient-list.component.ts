import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HealthInsurance } from '../../health-insurance/models/health-insurance';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  public displayedColumns = ['firstName', 'lastName', 'birthDate', 'dni', 'details', 'update'];
  public dataSource = new MatTableDataSource<Patient>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private patientService: PatientService, private errorService: ErrorHandlerService, private router: Router) { }
 
  ngOnInit() {
    this.getAllPatients();
  }
 
  public getAllPatients = () => {
    this.patientService.getAll().subscribe((data) => this.dataSource.data=data, (error)=>console.log(error));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public customSort = (event) => {
    console.log(event);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
 
  public redirectToDetails = (id: string) => {
    let url: string = `app/patient/details/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToUpdate(id:number) {
    let url: string = `app/patient/edit/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToDelete = (id: string) => {
    
  }

}
