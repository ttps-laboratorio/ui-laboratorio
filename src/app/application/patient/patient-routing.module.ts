import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }, children: [
      {
        path: 'list', component: PatientListComponent,
      },
      {
        path: 'edit/:id', component: PatientEditComponent,
      },
      {
        path: 'details/:id', component: PatientDetailsComponent,
      },
      {
        path: 'create', component: PatientEditComponent ,
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
export class PatientRoutingModule { }
