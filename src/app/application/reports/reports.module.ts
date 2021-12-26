import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerMonthComponent } from './per-month/per-month.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerStudyTypeComponent } from './per-study-type/per-study-type.component';


@NgModule({
  declarations: [
    PerMonthComponent,
    PerStudyTypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule,
    NgApexchartsModule,
  ]
})
export class ReportsModule { }
