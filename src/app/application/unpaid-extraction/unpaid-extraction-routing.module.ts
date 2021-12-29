import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { UnpaidExtractionListComponent } from './unpaid-extraction-list/unpaid-extraction-list.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], data: { permissions: ['ROLE_EMPLOYEE'] }, children: [
      {
        path: 'list', component: UnpaidExtractionListComponent,
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
export class UnpaidExtractionRoutingModule { }
