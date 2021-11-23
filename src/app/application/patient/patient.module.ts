import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientSearchComponent } from './patient-search/patient-search.component';


@NgModule({
  declarations: [
    PatientEditComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientRoutingModule
  ],
  exports:[ PatientDetailsComponent],
  entryComponents:[PatientSearchComponent]
})
export class PatientModule { }
