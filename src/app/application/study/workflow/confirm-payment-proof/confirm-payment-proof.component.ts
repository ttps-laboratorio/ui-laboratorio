import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { ConfirmPayment } from '../../models/confirm-payment';
import { Study } from '../../models/study';
import { StudyService } from '../../services/study.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-confirm-payment-proof',
  templateUrl: './confirm-payment-proof.component.html',
  styleUrls: ['./confirm-payment-proof.component.scss']
})
export class ConfirmPaymentProofComponent implements OnInit {

  @Input()
  public study: Study;
  @Output() reloadStudy = new EventEmitter<boolean>();

  public confirmPayment:ConfirmPayment = new ConfirmPayment();

  private dialogConfig: MatDialogConfig;

  constructor(private studyService: StudyService, private errorService:ErrorHandlerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public downloadPaymentProof():void{
    this.studyService.downloadPaymentProof(this.study.id).subscribe((data: Blob) => {
      const file = new Blob([data], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      saveAs(fileURL, this.study.patient.id + '_' + this.study.id + '_payment_proof.pdf');
    });
  }

  public doConfirmPayment():void {
    const confirm = this.studyService.confirmPaymentProof(this.study.id, this.confirmPayment);
    confirm.subscribe((data) => {
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      dialogRef.afterClosed()
        .subscribe(result => {
          this.reloadStudy.emit(true);
        });
    }, (error => {
      this.errorService.dialogConfig = { ...this.dialogConfig };
      this.errorService.handleError(error);
    }))
  }
}
