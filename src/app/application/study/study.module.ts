import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyRoutingModule } from './study-routing.module';
import { StudyListComponent } from './study-list/study-list.component';
import { StudyDetailsComponent } from './study-details/study-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudyCreateComponent } from './study-create/study-create.component';


@NgModule({
  declarations: [
    StudyListComponent,
    StudyDetailsComponent,
    StudyCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudyRoutingModule
  ]
})
export class StudyModule { }
