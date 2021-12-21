import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyRoutingModule } from './study-routing.module';
import { StudyListComponent } from './study-list/study-list.component';
import { StudyDetailsComponent } from './study-details/study-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudyCreateComponent } from './study-create/study-create.component';
import { PatientModule } from '../patient/patient.module';
import { UploadPaymentProofComponent } from './workflow/upload-payment-proof/upload-payment-proof.component';
import { ConfirmPaymentProofComponent } from './workflow/confirm-payment-proof/confirm-payment-proof.component';
import { DownloadSendConsentComponent } from './workflow/download-send-consent/download-send-consent.component';
import { UploadSignedConsentComponent } from './workflow/upload-signed-consent/upload-signed-consent.component';
import { CreateAppointmentComponent } from './workflow/create-appointment/create-appointment.component';
import { AddSampleComponent } from './workflow/add-sample/add-sample.component';


@NgModule({
  declarations: [
    StudyListComponent,
    StudyDetailsComponent,
    StudyCreateComponent,
    UploadPaymentProofComponent,
    ConfirmPaymentProofComponent,
    DownloadSendConsentComponent,
    UploadSignedConsentComponent,
    CreateAppointmentComponent,
    AddSampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudyRoutingModule,
    PatientModule,
  ]
})
export class StudyModule { }
