import { UserService } from './../core/services/user/user.service';
import { LoginService } from '../core/services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginLayout',
  templateUrl: './loginLayout.component.html',
  styleUrls: ['./loginLayout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  private email: string;
  private password: string;
  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.email, this.password);
  }

}
