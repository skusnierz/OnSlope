import { LoginService } from './../../../core/services/login/login.service';
import { UserService } from './../../../core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;

  constructor(
    private userService: UserService,
    private loginService: LoginService
    ) { }

  ngOnInit() {
  }

  getUserName() {
    return this.userService.currentUser.username;
  }

  logout() {
    this.loginService.logout();
  }

}
