import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { ReferringDoctor } from '../models/referring-doctor';
import { ReferringDoctorService } from '../services/referring-doctor.service';

@Component({
  selector: 'app-referring-doctor-list',
  templateUrl: './referring-doctor-list.component.html',
  styleUrls: ['./referring-doctor-list.component.scss']
})
export class ReferringDoctorListComponent implements OnInit {

  public displayedColumns = ['firstName', 'lastName', 'licenseNumber', 'email', 'phoneNumber', 'update'];
  public dataSource = new MatTableDataSource<ReferringDoctor>();

  public selectedReferringDoctor = new ReferringDoctor();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private referringDoctorService: ReferringDoctorService, private errorService: ErrorHandlerService, private router: Router) { }
 
  ngOnInit() {
    this.getAllHealthInsurances();
  }
 
  public getAllHealthInsurances = () => {
    this.referringDoctorService.getAll().subscribe((data) => this.dataSource.data=data);
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
    let url: string = `../details/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToUpdate(id:number) {
    let url: string = `app/doctor/edit/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToDelete = (id: string) => {
    
  }

}
