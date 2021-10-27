import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthInsuranceListComponent } from './health-insurance-list/health-insurance-list.component';

const routes: Routes = [
  {
    path: '', component: HealthInsuranceListComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthInsuranceRoutingModule { }