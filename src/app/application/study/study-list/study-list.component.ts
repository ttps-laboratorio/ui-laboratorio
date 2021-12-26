import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { SearchStudyFilter } from '../models/search-study-filter';
import { StudyItem } from '../models/study-item';
import { StudyStatus } from '../models/study-status';
import { StudyType } from '../models/study-type';
import { StudyStatusService } from '../services/study-status.service';
import { StudyTypeService } from '../services/study-type.service';
import { StudyService } from '../services/study.service';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.scss']
})
export class StudyListComponent implements OnInit {

  public displayedColumns = ['patient', 'creationDate', 'studyType', 'studyStatus', 'details'];
  public dataSource = new MatTableDataSource<StudyItem>();
  public searchStudyFilter: SearchStudyFilter = new SearchStudyFilter();
  public searchFilterForm: FormGroup;
  public studyStatusList: StudyStatus[];
  public studyTypeList: StudyType[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studyService: StudyService, private studyStatusService: StudyStatusService,
    private studyTypeService: StudyTypeService, private errorService: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.searchFilterForm = new FormGroup({
      studyType: new FormControl(this.searchStudyFilter.studyType.id),
      studyStatus: new FormControl(this.searchStudyFilter.studyStatus.id),
      dni: new FormControl(this.searchStudyFilter.dni, Validators.pattern('^[0-9]+$')),
    });
    this.getAllStudies();
    this.getStudyStatus();
    this.getStudyTypes();
  }

  public getAllStudies = () => {
    let filter: SearchStudyFilter = cloneDeep(this.searchStudyFilter);
    if (filter.studyStatus.id == 0)
      filter.studyStatus.id = null;
      if (filter.studyType.id == 0)
      filter.studyType.id = null;
    let filter2 = { "dni" : filter.dni, "studyTypeId": filter.studyType.id, "studyStatusId" : filter.studyStatus.id };
   // this.studyService.getAllItem(filter).subscribe((data) => this.dataSource.data = data);
   this.studyService.getAllItemFilter(filter2).subscribe((data) => this.dataSource.data = data);
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

  public hasError(controlName: string, errorName: string): boolean {
    return this.searchFilterForm.controls[controlName].hasError(errorName);
  }
}
