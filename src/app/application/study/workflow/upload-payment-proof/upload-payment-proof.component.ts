import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Study } from '../../models/study';
import { StudyService } from '../../services/study.service';

@Component({
  selector: 'app-upload-payment-proof',
  templateUrl: './upload-payment-proof.component.html',
  styleUrls: ['./upload-payment-proof.component.scss']
})
export class UploadPaymentProofComponent implements OnInit {

  @Input()
  public study: Study;
  @Output() reloadStudy = new EventEmitter<boolean>();

  private dialogConfig: MatDialogConfig;

  fileName = '';
  fileToUpload: File | null = null;

  constructor(private studyService: StudyService, private errorService:ErrorHandlerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadPaymentProof(): void {
    if (this.fileToUpload) {
      this.fileName = this.fileToUpload.name;
      const formData = new FormData();
      formData.append("paymentProofPdf", this.fileToUpload);
      const upload = this.studyService.uploadPaymentProof(this.study.id, formData);
      //upload.subscribe(data => this.refreshStudy.emit(true));
      upload.subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.reloadStudy.emit(true);
          });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }));
    }
  }

}
