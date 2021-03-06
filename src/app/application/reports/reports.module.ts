import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerMonthComponent } from './per-month/per-month.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerStudyStatusComponent } from './per-study-status/per-study-status.component';
import { PerStudyTypeComponent } from './per-study-type/per-study-type.component';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard.component';


@NgModule({
  declarations: [
    PerMonthComponent,
    PerStudyTypeComponent,
    ReportsDashboardComponent,
    PerStudyStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule,
    NgApexchartsModule,
  ],
  // exports:[ PerMonthComponent, PerStudyTypeComponent],
})
export class ReportsModule { }
