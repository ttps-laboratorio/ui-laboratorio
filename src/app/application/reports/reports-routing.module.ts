import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import {ReportsListComponent} from './reports-list/reports-list.component'



const routes: Routes = [
    {
      path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }, children: [
        {
          path: 'list', component: ReportsListComponent,
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
    export class ReportsRoutingModule { }