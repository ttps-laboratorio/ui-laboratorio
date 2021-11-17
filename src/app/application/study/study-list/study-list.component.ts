import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Study } from '../models/study';
import { StudyService } from '../services/study.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.scss']
})
export class StudyListComponent implements OnInit {

  public displayedColumns = ['patient', 'creationDate', 'studyType', 'details'];
  public dataSource = new MatTableDataSource<Study>();


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private studyService: StudyService, private errorService: ErrorHandlerService, private router: Router) { }
 
  ngOnInit() {
    this.getAllStudies();
  }
 
  public getAllStudies = () => {
    this.studyService.getAll().subscribe((data) => this.dataSource.data=data);
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
    let url: string = `app/study/edit/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToDelete = (id: string) => {
    
  }
}
