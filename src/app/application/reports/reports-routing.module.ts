import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { PerMonthComponent } from './per-month/per-month.component';
import { PerStudyStatusComponent } from './per-study-status/per-study-status.component';
import { PerStudyTypeComponent} from './per-study-type/per-study-type.component';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard.component'

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }, children: [
      {
        path: 'per-month', component: PerMonthComponent,
      },
      {
        path: 'per-study-type', component: PerStudyTypeComponent,
      },
      {
        path: 'per-study-status', component: PerStudyStatusComponent,
      },
      {
        path: 'dashboard', component: ReportsDashboardComponent,
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }