import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { StudyItem } from '../../study/models/study-item';
import { StudyService } from '../../study/services/study.service';
import { PaidExtractions } from '../models/paid-extractions';

@Component({
  selector: 'app-unpaid-extraction-list',
  templateUrl: './unpaid-extraction-list.component.html',
  styleUrls: ['./unpaid-extraction-list.component.scss']
})
export class UnpaidExtractionListComponent implements OnInit {

  public paidExtractionFrom: FormGroup= new FormGroup({});
  public displayedColumns = ['id', 'patient', 'extractionAmount', 'paid'];
  public dataSource = new MatTableDataSource<StudyItem>();
  public selection = new SelectionModel<StudyItem>(true, []);
  public totalAmount: number = 0;
  private dialogConfig: MatDialogConfig;
  constructor(private router: Router, private studyService: StudyService, private errorService: ErrorHandlerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUnpaidExtractions();
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public paid(): void {
    let paidExtractions: PaidExtractions = new PaidExtractions();
    this.selection.selected.forEach(e => paidExtractions.unpaidStudies.push(e.id));
    this.studyService.paidExtractions(paidExtractions).subscribe(
      (data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.totalAmount = 0;
            this.getUnpaidExtractions();
          });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      })
    );
  }

  public selectFailedHandler(studyItem: StudyItem) {
    this.selection.toggle(studyItem);
    this.calculateTotalAmount();
  }

  private calculateTotalAmount(): void {
    let total: number = 0;
    this.selection.selected.forEach(e => total += e.extractionAmount);
    this.totalAmount = total;
  }

  private getUnpaidExtractions(): void {
    this.studyService.getAllUnpaidExtraction().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
