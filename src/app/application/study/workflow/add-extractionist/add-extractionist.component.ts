import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Extractionist } from '../../models/extractionist';
import { Study } from '../../models/study';
import { ExtractionistService } from '../../services/extractionist.service';
import { StudyService } from '../../services/study.service';

@Component({
  selector: 'app-add-extractionist',
  templateUrl: './add-extractionist.component.html',
  styleUrls: ['./add-extractionist.component.scss']
})
export class AddExtractionistComponent implements OnInit {

  @Input()
  public study: Study;
  @Output() reloadStudy = new EventEmitter<boolean>();

  public extractionist: Extractionist = new Extractionist();
  public extractionistList: Extractionist[] = [];
  public extractionistForm: FormGroup;

  private dialogConfig: MatDialogConfig;

  constructor(private studyService: StudyService, private extractionistService: ExtractionistService, private errorService: ErrorHandlerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.extractionistForm = new FormGroup({
      extractionist: new FormControl(this.extractionist.id, [Validators.required]),
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
    this.getExtrationists();
  }

  public getExtrationists(): void {
    this.extractionistService.getAll().subscribe((data) => this.extractionistList = data);
  }

  public addExtractionist(): void {
    this.studyService.addExtractionist(this.study.id, this.extractionist.id).subscribe(
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
    return this.extractionistForm.controls[controlName].hasError(errorName);
  }

}
