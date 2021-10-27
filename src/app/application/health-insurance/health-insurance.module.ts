import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthInsuranceRoutingModule } from './health-insurance-routing.module';
import { HealthInsuranceComponent } from './components/health-insurance/health-insurance.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HealthInsuranceComponent
  ],
  imports: [
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    CommonModule,
    MatDividerModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatInputModule,
    HealthInsuranceRoutingModule
  ]
})
export class HealthInsuranceModule { }
