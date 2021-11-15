import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { HealthInsurance } from '../../health-insurance/models/health-insurance';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-edit-component',
  templateUrl: './employee-edit-component.component.html',
  styleUrls: ['./employee-edit-component.component.scss']
})
export class EmployeeEditComponentComponent implements OnInit {

  public employeeForm: FormGroup;
  public selectedEmployee: Employee = new Employee();
  private dialogConfig: MatDialogConfig;
  loading = false;

  constructor(private router: Router, private employeeService: EmployeeService, private activeRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployee();
    this.employeeForm = new FormGroup({
      firstName: new FormControl(this.selectedEmployee.firstName, [Validators.required, Validators.maxLength(60)]),
      lastName: new FormControl(this.selectedEmployee.lastName, [Validators.required, Validators.maxLength(60)]),
      username: new FormControl(this.selectedEmployee.user.username, [Validators.required, Validators.maxLength(60)]),
      password: new FormControl(this.selectedEmployee.user.password, [Validators.required, Validators.maxLength(60)]),
      email: new FormControl(this.selectedEmployee.user.email, [Validators.required, Validators.email, Validators.maxLength(60)]),
    });
    this.dialogConfig = {
      height: '250px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  private getEmployee(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.employeeService.get(id).subscribe((data) => this.selectedEmployee = data);
    }
  }

  updateEmployee() {
    if (!this.employeeForm.valid)
      return;
    if (this.selectedEmployee.id !== undefined) {
      this.employeeService.update(this.selectedEmployee).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/employee/list']);
          });
      });
    } else {
      this.employeeService.create(this.selectedEmployee).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/employee/list']);
          });
      });
    }
  }

  editEmployee(selectedEmployee: Employee) {
    this.selectedEmployee = selectedEmployee;
  }

  clearEmployee() {
    this.selectedEmployee = new Employee();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.employeeForm.controls[controlName].hasError(errorName);
  }

}
