import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ReferringDoctor } from 'src/app/application/referring-doctor/models/referring-doctor';
import { ReferringDoctorService } from 'src/app/application/referring-doctor/services/referring-doctor.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Study } from '../../models/study';
import { StudyService } from '../../services/study.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-delivery-to-referring-doctor',
  templateUrl: './delivery-to-referring-doctor.component.html',
  styleUrls: ['./delivery-to-referring-doctor.component.scss']
})
export class DeliveryToReferringDoctorComponent implements OnInit {

 
  @Input()
  public study: Study;
  @Output() reloadStudy = new EventEmitter<boolean>();

  constructor(private studyService: StudyService) { }

  ngOnInit(): void {
 
  }

  public downloadFinalReport(): void {
    this.studyService.downloadFinalReport(this.study.id).subscribe((data: Blob) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      saveAs(fileURL, this.study.patient.id + '_' + this.study.id + '_final_report.pdf');
      this.reloadStudy.emit(true);
    });
  }

}
