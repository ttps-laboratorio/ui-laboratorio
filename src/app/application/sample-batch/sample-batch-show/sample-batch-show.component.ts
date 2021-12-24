import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Sample } from '../../study/models/sample';
import { Study } from '../../study/models/study';
import { SampleBatch } from '../models/sample-batch';
import { SampleUrl } from '../models/sample-url';
import { SampleBatchService } from '../services/sample-batch.service';

@Component({
  selector: 'app-sample-batch-show',
  templateUrl: './sample-batch-show.component.html',
  styleUrls: ['./sample-batch-show.component.scss']
})
export class SampleBatchShowComponent implements OnInit {

  public sampleBatchForm: FormGroup;
  public sampleBatch: SampleBatch = new SampleBatch();
  public sampleUrl: SampleUrl = new SampleUrl();
  public displayedColumns = ['id', 'studyId', 'showStudy', 'milliliters', 'freezer'];
  public dataSource = new MatTableDataSource<Study>();
  private dialogConfig: MatDialogConfig;

  constructor(private router: Router, private sampleBatchService: SampleBatchService, private errorService: ErrorHandlerService, private activeRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSampleBatch();
    this.sampleBatchForm = new FormGroup({
      url: new FormControl(this.sampleUrl.url, [Validators.required, Validators.maxLength(255)])
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public addUrl(): void {
    this.sampleBatchService.addUrl(this.sampleBatch.id, this.sampleUrl).subscribe(
      (data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/sample-batch/list']);
          });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      })
    );
  }

  public redirectToStudy = (id: string) => {
    let url: string = `app/study/details/${id}`;
    this.router.navigate([url]);
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.sampleBatchForm.controls[controlName].hasError(errorName);
  }

  private getSampleBatch(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.sampleBatchService.get(id).subscribe((data) => {
        this.sampleBatch = data;
        this.dataSource.data = this.sampleBatch.studies;
      });
    }
  }
}