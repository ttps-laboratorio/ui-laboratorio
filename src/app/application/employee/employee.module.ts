import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEditComponentComponent } from './employee-edit-component/employee-edit-component.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';



@NgModule({
  declarations: [
    EmployeeEditComponentComponent,
    EmployeeListComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
