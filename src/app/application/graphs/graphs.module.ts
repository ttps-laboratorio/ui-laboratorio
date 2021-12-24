import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerStudyTypeComponent } from './per-study-type/per-study-type.component';
import { PerMonthComponent } from './per-month/per-month.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatsComponent } from './stats/stats.component';
import { GraphsRoutingModule } from './graphs-routing.module';
import { GraphsListComponent } from './graphs-list/graphs-list.component';
import { StudyModule } from '../study/study.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    GraphsListComponent,
    // PerStudyTypeComponent,
    PerMonthComponent,
    // StatsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GraphsRoutingModule,
    StudyModule,
    ChartsModule
  ]
})
export class GraphsModule { }
