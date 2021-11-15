import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { EmployeeEditComponentComponent } from './employee-edit-component/employee-edit-component.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_ADMINISTRATOR'] }, children: [
      {
        path: 'list', component: EmployeeListComponentComponent,
      },
      {
        path: 'edit/:id', component: EmployeeEditComponentComponent,
      },
      {
        path: 'create', component: EmployeeEditComponentComponent,
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
export class EmployeeRoutingModule { }