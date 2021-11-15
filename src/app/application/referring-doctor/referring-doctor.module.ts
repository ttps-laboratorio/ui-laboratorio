import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReferringDoctorRoutingModule } from './referring-doctor-routing.module';
import { ReferringDoctorEditComponent } from './referring-doctor-edit/referring-doctor-edit.component';
import { ReferringDoctorListComponent } from './referring-doctor-list/referring-doctor-list.component';


@NgModule({
  declarations: [
    ReferringDoctorEditComponent,
    ReferringDoctorListComponent
  ],
  imports: [
    ReferringDoctorRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ReferringDoctorModule { }
