import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportsRoutingModule } from './reports-routing.module'

@NgModule({
  declarations: [
    ReportsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
