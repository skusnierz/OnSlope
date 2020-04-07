import { QueriesLoginService } from './queriesLogin.service';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private apollo: Apollo,
    private queriesLoginService: QueriesLoginService,
    private router: Router
  ) { }

  async login(email: string, password: string) {
    await this.apollo.mutate({
      mutation: this.queriesLoginService.login,
      variables: {
        email,
        password
      }
    }).toPromise().then(({ data }) => {
      console.log('Login successful', data);
    }, (error) => {
      console.log('Error during : Login!!', error);
    });
    this.router.navigate(['home']);
  }

  logout() {
    this.apollo.mutate({
      mutation: this.queriesLoginService.logout,
    }).subscribe(({ data }) => {
      console.log('Logout successful', data);
    }, (error) => {
      console.log('Error during : Login!!', error);
    });
    this.router.navigate(['login'])
  }

}
