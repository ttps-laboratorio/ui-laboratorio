import { Time } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Appointment } from '../../models/appointment';
import { Study } from '../../models/study';
import { AppointmentService } from '../../services/appointment.service';
import { StudyService } from '../../services/study.service';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {

  public todayDate: Date = new Date();
  public filterDates: Date[] = [];
  public times: string[] = [];
  public appointmentForm: FormGroup;
  public appointment: Appointment = new Appointment();
  @Input()
  public study: Study;
  @Output() reloadStudy = new EventEmitter<boolean>();

  private dialogConfig: MatDialogConfig;

  constructor(private studyService: StudyService, private appointmentService: AppointmentService, private errorService: ErrorHandlerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.appointmentForm = new FormGroup({
      date: new FormControl(this.appointment.date, [Validators.required, this.dateAppointmentValidator()]),
      time: new FormControl(this.appointment.time, [Validators.required]),
    });
    this.dialogConfig = {
      height: '300px',
      width: '400px',
      disableClose: true,
      data: {}
    }
    this.getDates();
  }

  public getTimes(): void {
    this.appointmentService.getAvailableTimes(this.appointment.date).subscribe((data) => {
      this.times = data;
    });
  }

  public getDates(): void {
    this.appointmentService.getAvailableDates(this.appointment.date ? this.appointment.date: new Date()).subscribe((data) => {
      data.forEach(d => {
        let d1: Date = new Date();
        d1.setTime(Date.parse(d));
        d1.setTime(this.normalizeDate(d1));
        this.filterDates.push(d1);
      });
    });
  }

  public filterOcuppedDays(d: Date | null): boolean {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  public changeDay(): void {
    this.appointmentForm.controls['time'].reset();
    this.getTimes();
  }

  public createAppointment(): void {
    let a:Appointment = cloneDeep(this.appointment)
    let parts : string[] = a.time.split(':');
    parts.pop();
    a.time = parts.join(':');
    this.studyService.createAppointment(this.study.id, a).subscribe(
      (data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.reloadStudy.emit(true);
          });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }));
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.appointmentForm.controls[controlName].hasError(errorName);
  }

  private normalizeDate(date: Date): number {
    return date.getTime() + this.study.patient.birthDate.getTimezoneOffset() * 60 * 1000;
  }

  public dateAppointmentValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === undefined || control.value == null)
        return null;
      let d = control.value;
      var ok = false;
      for (var i = 0; i < this.filterDates.length; i++) {
        let date = this.filterDates[i];
        if (d.getTime() == date.getTime()) {
          ok = true;
        }
      }
      return !ok ? { dateAppointment: { value: control.value } } : null;
    };
  }
}
