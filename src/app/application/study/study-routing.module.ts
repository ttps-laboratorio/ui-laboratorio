import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { StudyCreateComponent } from './study-create/study-create.component';
import { StudyDetailsComponent } from './study-details/study-details.component';
import { StudyListComponent } from './study-list/study-list.component';


const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }, children: [
      {
        path: 'list', component: StudyListComponent,
      },
      {
        path: 'create', component: StudyCreateComponent ,
      },
      {
        path: 'details/:id', component: StudyDetailsComponent ,
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
