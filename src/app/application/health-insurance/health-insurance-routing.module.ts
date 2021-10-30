import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { HealthInsuranceEditComponent } from './health-insurance-edit/health-insurance-edit.component';
import { HealthInsuranceListComponent } from './health-insurance-list/health-insurance-list.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_CONFIGURATOR'] }, children: [
      {
        path: 'list', component: HealthInsuranceListComponent,
      },
      {
        path: 'edit/:id', component: HealthInsuranceEditComponent,
      },
      {
        path: 'create', component: HealthInsuranceEditComponent,
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
export class HealthInsuranceRoutingModule { }