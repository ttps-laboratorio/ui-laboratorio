import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/pages/auth/models';
import { AuthService } from 'src/app/pages/auth/services';
import { Study } from '../../models/study';
import { StudyService } from '../../services/study.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-send-consent',
  templateUrl: './download-send-consent.component.html',
  styleUrls: ['./download-send-consent.component.scss']
})
export class DownloadSendConsentComponent implements OnInit {

  public user:User;
  @Input()
  public study: Study;
  @Output() reloadStudy = new EventEmitter<boolean>();

  constructor(private studyService: StudyService, private authService:AuthService) { }

  ngOnInit(): void {
    this.user =this.authService.user;
  }

  public downloadConsent():void{
    this.studyService.downloadConsent(this.study.id).subscribe((data: Blob) => {
      const file = new Blob([data], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      saveAs(fileURL, this.study.patient.id + '_' + this.study.id + '_consent.pdf');
      this.reloadStudy.emit(true);
    });
  }

}
