import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.scss']
})
export class EmployeeListComponentComponent implements OnInit {

  public displayedColumns = ['firstName', 'lastName', 'email', 'username', 'details', 'update'];
  public dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private employeeService: EmployeeService, private errorService: ErrorHandlerService, private router: Router) { }
 
  ngOnInit() {
    this.getAllHealthInsurances();
  }
 
  public getAllHealthInsurances = () => {
    this.employeeService.getAll().subscribe((data) => this.dataSource.data=data);
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
    let url: string = `app/employee/edit/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToDelete = (id: string) => {
    
  }


}
