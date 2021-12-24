import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { SampleBatchListComponent } from './sample-batch-list/sample-batch-list.component';
import { SampleBatchShowComponent } from './sample-batch-show/sample-batch-show.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }, children: [
      {
        path: 'list', component: SampleBatchListComponent,
      },
      {
        path: 'details/:id', component: SampleBatchShowComponent ,
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
export class SampleBatchRoutingModule { }
