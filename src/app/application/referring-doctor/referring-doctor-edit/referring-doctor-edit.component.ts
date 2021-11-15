import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ReferringDoctor } from '../models/referring-doctor';
import { ReferringDoctorService } from '../services/referring-doctor.service';

@Component({
  selector: 'app-referring-doctor-edit',
  templateUrl: './referring-doctor-edit.component.html',
  styleUrls: ['./referring-doctor-edit.component.scss']
})
export class ReferringDoctorEditComponent implements OnInit {

  public referringDoctorForm: FormGroup;
  public selectedReferringDoctor: ReferringDoctor = new ReferringDoctor();
  private dialogConfig: MatDialogConfig;
  loading = false;

  constructor(private router: Router, private referringDoctorService: ReferringDoctorService, private activeRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getReferringDoctor();
    this.referringDoctorForm = new FormGroup({
      firstName: new FormControl(this.selectedReferringDoctor.firstName, [Validators.required, Validators.maxLength(60)]),
      lastName: new FormControl(this.selectedReferringDoctor.lastName, [Validators.required, Validators.maxLength(60)]),
      licenseNumber: new FormControl(this.selectedReferringDoctor.licenseNumber, [Validators.required, Validators.maxLength(60)]),
      email: new FormControl(this.selectedReferringDoctor.email, [Validators.required, Validators.email, Validators.maxLength(60)]),
      phoneNumber: new FormControl(this.selectedReferringDoctor.phoneNumber, [Validators.required, Validators.maxLength(12)])
    });
    this.dialogConfig = {
      height: '250px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  private getReferringDoctor(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.referringDoctorService.get(id).subscribe((data) => this.selectedReferringDoctor = data);
    }
  }

  updateReferringDoctor() {
    if (!this.referringDoctorForm.valid)
      return;
    if (this.selectedReferringDoctor.id !== undefined) {
      this.referringDoctorService.update(this.selectedReferringDoctor).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/doctor/list']);
          });
      });
    } else {
      this.referringDoctorService.create(this.selectedReferringDoctor).subscribe((data) => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/app/doctor/list']);
          });
      });
    }
  }

  editReferringDoctor(referringDoctor: ReferringDoctor) {
    this.selectedReferringDoctor = referringDoctor;
  }

  clearReferringDoctor() {
    this.selectedReferringDoctor = new ReferringDoctor();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.referringDoctorForm.controls[controlName].hasError(errorName);
  }

}
