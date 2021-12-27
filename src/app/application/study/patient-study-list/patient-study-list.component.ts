import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { StudyItem } from '../models/study-item';
import { StudyStatus } from '../models/study-status';
import { StudyType } from '../models/study-type';
import { StudyStatusService } from '../services/study-status.service';
import { StudyTypeService } from '../services/study-type.service';
import { StudyService } from '../services/study.service';

@Component({
  selector: 'app-patient-study-list',
  templateUrl: './patient-study-list.component.html',
  styleUrls: ['./patient-study-list.component.scss']
})
export class PatientStudyListComponent implements OnInit {

  public displayedColumns = ['patient', 'creationDate', 'studyType', 'studyStatus', 'details'];
  public dataSource = new MatTableDataSource<StudyItem>();
  public searchFilterForm: FormGroup;
  public studyStatusList: StudyStatus[];
  public studyTypeList: StudyType[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studyService: StudyService, private studyStatusService: StudyStatusService,
    private studyTypeService: StudyTypeService, private errorService: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.getAllStudies();
  }

  public getAllStudies = () => {

   this.studyService.getAllItemFilter({}).subscribe((data) => this.dataSource.data = data);
  }

  public getStudyStatus = () => {
    this.studyStatusService.getAll().subscribe((data) => this.studyStatusList = data);
  }

  public getStudyTypes = () => {
    this.studyTypeService.getAll().subscribe((data) => this.studyTypeList = data);
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
    let url: string = `app/study/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate(id: number) {
    let url: string = `app/study/edit/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {

  }

}
