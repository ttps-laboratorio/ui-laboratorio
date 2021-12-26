import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Credentials } from '../../models/credentials';
import { PatientRegister } from '../../models/patient-register';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  @Output() sendSignupForm = new EventEmitter<PatientRegister>();
  public form: FormGroup;
  public patientRegister : PatientRegister = new PatientRegister();
  @Input()
  public signupError:boolean;
  @Input()
  public errorMessage:string;

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.patientRegister.user.username, [Validators.required]),
      password: new FormControl(this.patientRegister.user.password, [Validators.required]),
      email: new FormControl(this.patientRegister.user.email, [Validators.required, Validators.email]),
      dni: new FormControl(this.patientRegister.dni, [Validators.required])
    });
  }

  public signup(): void {
    if (this.form.valid) {
      this.sendSignupForm.emit(this.patientRegister);
    }
  }

  public reset(): void {
    this.form.reset;
  }

}
