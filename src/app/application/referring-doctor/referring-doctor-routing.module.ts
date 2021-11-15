import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { ReferringDoctorEditComponent } from './referring-doctor-edit/referring-doctor-edit.component';
import { ReferringDoctorListComponent } from './referring-doctor-list/referring-doctor-list.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_CONFIGURATOR'] }, children: [
      {
        path: 'list', component: ReferringDoctorListComponent,
      },
      {
        path: 'edit/:id', component: ReferringDoctorEditComponent,
      },
      {
        path: 'create', component: ReferringDoctorEditComponent,
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
export class ReferringDoctorRoutingModule { }