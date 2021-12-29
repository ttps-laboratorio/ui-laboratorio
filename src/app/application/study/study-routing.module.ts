import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { PatientStudyListComponent } from './patient-study-list/patient-study-list.component';
import { StudyCreateComponent } from './study-create/study-create.component';
import { StudyDetailsComponent } from './study-details/study-details.component';
import { StudyListComponent } from './study-list/study-list.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE', 'ROLE_PATIENT'] }, children: [
      {
        path: 'my-studies',
        component: PatientStudyListComponent,
        canActivate: [AuthGuard], data: { permissions: ['ROLE_PATIENT'] }
      },
      {
        path: 'list', component: StudyListComponent,
        canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }
      },
      {
        path: 'create', component: StudyCreateComponent,
        canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }
      },
      {
        path: 'details/:id', component: StudyDetailsComponent,
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
export class StudyRoutingModule { }
