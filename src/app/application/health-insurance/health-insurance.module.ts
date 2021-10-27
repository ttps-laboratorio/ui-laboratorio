import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthInsuranceListComponent } from './health-insurance-list/health-insurance-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HealthInsuranceRoutingModule } from './health-insurance-routing.module';



@NgModule({
  declarations: [
    HealthInsuranceListComponent
  ],
  imports: [
    HealthInsuranceRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class HealthInsuranceModule { }
