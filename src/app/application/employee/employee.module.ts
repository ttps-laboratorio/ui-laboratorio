import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEditComponentComponent } from './employee-edit-component/employee-edit-component.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [
    EmployeeEditComponentComponent,
    EmployeeListComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
