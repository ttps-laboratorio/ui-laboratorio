import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../models/credentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<Credentials>();
  public form: FormGroup;
  public credentials : Credentials = {"username":"an username","password" : "secret"}

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.credentials.username, [Validators.required]),
      password: new FormControl(this.credentials.password, [Validators.required])
    });
  }

  public login(): void {
    if (this.form.valid) {
      let cred:Credentials = {"username":this.form.get('username').value, "password":this.form.get('password').value};
      this.sendLoginForm.emit(cred);
    }
  }
}
