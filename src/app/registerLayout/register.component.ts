import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  private formSubmitAttempt: boolean;
  private atLeastOneUpperCasePattern = '(?=.*?[A-Z]).*';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.atLeastOneUpperCasePattern), Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
    this.formSubmitAttempt = false;
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.formSubmitAttempt = true;
    console.log(this.registerForm.value.password);
    console.log(this.registerForm.value.confirmPassword);
    console.log(this.registerForm.value.email);
    console.log(this.registerForm.value.username);
  }

  passwordsAreMatching() {
    return this.registerForm.value.password === this.registerForm.value.confirmPassword;
  }

}
