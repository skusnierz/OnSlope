import { UserService } from './../core/services/user/user.service';
import { LoginService } from '../core/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginLayout',
  templateUrl: './loginLayout.component.html',
  styleUrls: ['./loginLayout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  private LoginForm: FormGroup;
  private email: string;
  private password: string;
  private formSubmitAttempt: boolean;
  private invalidData: boolean;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.LoginForm.controls;
  }

  async login() {
    this.invalidData =  await this.loginService.login(this.email, this.password);
    this.formSubmitAttempt = true;
  }

}
