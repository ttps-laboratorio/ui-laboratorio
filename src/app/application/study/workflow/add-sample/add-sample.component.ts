import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { ConfirmPayment } from '../../models/confirm-payment';
import { Sample } from '../../models/sample';
import { Study } from '../../models/study';
import { StudyService } from '../../services/study.service';

@Component({
  selector: 'app-add-sample',
  templateUrl: './add-sample.component.html',
  styleUrls: ['./add-sample.component.scss']
})
export class AddSampleComponent implements OnInit {

  @Input()
  public study: Study;
  @Output() reloadStudy = new EventEmitter<boolean>();

  public sample:Sample = new Sample();
  public sampleForm: FormGroup;

  private dialogConfig: MatDialogConfig;

  constructor(private studyService: StudyService, private errorService:ErrorHandlerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.sampleForm = new FormGroup({
      milliliters: new FormControl(this.sample.milliliters, [Validators.required]),
      freezer: new FormControl(this.sample.freezer, [Validators.required]),
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public addSample(): void {
    this.studyService.addSample(this.study.id, this.sample).subscribe(
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
    return this.sampleForm.controls[controlName].hasError(errorName);
  }
}
