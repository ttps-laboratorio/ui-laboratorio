import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Study } from '../../models/study';
import { StudyService } from '../../services/study.service';

@Component({
  selector: 'app-upload-signed-consent',
  templateUrl: './upload-signed-consent.component.html',
  styleUrls: ['./upload-signed-consent.component.scss']
})
export class UploadSignedConsentComponent implements OnInit {

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

  uploadSignedConsent(): void {
    if (this.fileToUpload) {
      this.fileName = this.fileToUpload.name;
      const formData = new FormData();
      formData.append("signedConsentPdf", this.fileToUpload);
      const upload = this.studyService.uploadSignedConsent(this.study.id, formData);
      upload.subscribe((data) => {
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
}
