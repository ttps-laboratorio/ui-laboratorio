import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthInsuranceListComponent } from './health-insurance-list/health-insurance-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HealthInsuranceRoutingModule } from './health-insurance-routing.module';
import { HealthInsuranceEditComponent } from './health-insurance-edit/health-insurance-edit.component';
import { HealthInsuranceService } from './services/health-insurance.service';
import { HealthInsurance } from './models/health-insurance';

@NgModule({
  declarations: [
    HealthInsuranceListComponent,
    HealthInsuranceEditComponent
  ],
  imports: [
    HealthInsuranceRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class HealthInsuranceModule { }
