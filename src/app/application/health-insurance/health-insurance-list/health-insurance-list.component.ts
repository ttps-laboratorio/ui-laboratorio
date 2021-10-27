import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HealthInsurance } from '../models/health-insurance';
import { HealthInsuranceService } from '../services/health-insurance.service';

@Component({
  selector: 'app-health-insurance-list',
  templateUrl: './health-insurance-list.component.html',
  styleUrls: ['./health-insurance-list.component.scss']
})
export class HealthInsuranceListComponent implements OnInit {

  public displayedColumns = ['name', 'email', 'phone', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<HealthInsurance>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private healthInsuranceService: HealthInsuranceService, private errorService: ErrorHandlerService, private router: Router) { }
 
  ngOnInit() {
    this.getAllHealthInsurances();
  }
 
  public getAllHealthInsurances = () => {
    this.healthInsuranceService.getAll().subscribe((data) => this.dataSource.data=data);
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
    let url: string = `/owner/details/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }

}
