import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthInsuranceComponent } from './components/health-insurance/health-insurance.component';

const routes: Routes = [
  {
    path: '', component: HealthInsuranceComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthInsuranceRoutingModule { }
