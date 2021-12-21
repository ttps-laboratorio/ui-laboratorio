import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SampleBatch } from '../models/sample-batch';
import { SampleBatchService } from '../services/sample-batch.service';

@Component({
  selector: 'app-sample-batch-list',
  templateUrl: './sample-batch-list.component.html',
  styleUrls: ['./sample-batch-list.component.scss']
})
export class SampleBatchListComponent implements OnInit {

  public displayedColumns = ['id', 'status', 'details'];
  public dataSource = new MatTableDataSource<SampleBatch>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sampleBatchService: SampleBatchService, private router: Router) { }

  ngOnInit(): void {
    this.getSampleBatches();
  }

  public getSampleBatches(){
    this.sampleBatchService.getAll().subscribe(data => this.dataSource.data = data);
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
    let url: string = `app/sample-batch/details/${id}`;
    this.router.navigate([url]);
  }

}
