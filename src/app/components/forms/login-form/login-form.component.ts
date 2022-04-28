  import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
  import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
  import {LoginDetails} from "../../../shared/models/login.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input()
  exampleValue?: string;

  @Output()
  loginEvent = new EventEmitter<LoginDetails>();

  loginForm = new FormGroup({});
  countries = [
    {
      title: 'Latvia',
      countryCode: 'LV'
    },
    {
      title: 'Estonia',
      countryCode: 'EST'
    }
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      subscribe: [true],
      country: ['']
    })
  }

  login(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.loginEvent.emit(this.loginForm.value)
    }
  }
}
