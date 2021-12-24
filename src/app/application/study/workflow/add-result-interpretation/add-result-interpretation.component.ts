import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { FinalReport } from '../../models/final-report';
import { Study } from '../../models/study';
import { StudyService } from '../../services/study.service';

@Component({
  selector: 'app-add-result-interpretation',
  templateUrl: './add-result-interpretation.component.html',
  styleUrls: ['./add-result-interpretation.component.scss']
})
export class AddResultInterpretationComponent implements OnInit {

  @Input()
  public study: Study;
  @Output() reloadStudy = new EventEmitter<boolean>();

  public finalReport: FinalReport = new FinalReport();
  public finalReportForm: FormGroup;

  private dialogConfig: MatDialogConfig;

  constructor(private studyService: StudyService, private errorService: ErrorHandlerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.finalReportForm = new FormGroup({
      report: new FormControl(this.finalReport.report, [Validators.required]),
      positiveResult: new FormControl(this.finalReport.positiveResult, [Validators.required]),
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public addFinalReport(): void {
      this.studyService.addFinalReport(this.study.id, this.finalReport).subscribe(
        (data) => {
          let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          dialogRef.afterClosed()
            .subscribe(result => {
              this.reloadStudy.emit(true);
            });
        }, (error => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
        })
      );
  }


  public hasError(controlName: string, errorName: string): boolean {
    return this.finalReportForm.controls[controlName].hasError(errorName);
  }
}
