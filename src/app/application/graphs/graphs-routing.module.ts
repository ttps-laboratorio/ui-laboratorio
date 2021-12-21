import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { PerMonthComponent } from './per-month/per-month.component';
import { GraphsListComponent } from './graphs-list/graphs-list.component';
import { PerStudyTypeComponent } from './per-study-type/per-study-type.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
    {
      path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }, children: [
        {
            path: 'list', component: GraphsListComponent,
        },
        {
          path: 'permonth', component: PerMonthComponent,
        },
        {
          path: 'perstudy', component: PerStudyTypeComponent,
        },
        {
          path: 'stats', component: StatsComponent,
        },
        {
          path: '', redirectTo: 'list', pathMatch: 'full'
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GraphsRoutingModule { }