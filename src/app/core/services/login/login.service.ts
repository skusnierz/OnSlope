import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginQuery = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      username,
      id
    }
  }
`;

private logoutQuery = gql`
  mutation logout {
    logout
  }
`;

  constructor(
    private apollo: Apollo,
    private router: Router
  ) { }

  async login(email: string, password: string) {
    let invalidLogin = true;
    await this.apollo.mutate({
      mutation: this.loginQuery,
      variables: {
        email,
        password
      }
    }).toPromise().then(({ data }) => {
      console.log('Login successful', data);
      invalidLogin = false;
      this.router.navigate(['home']);
    }, (error) => {
      console.log('Error during : Login!!', error);
    });
    return invalidLogin;
  }

  logout() {
    this.apollo.mutate({
      mutation: this.logoutQuery,
    }).subscribe(({ data }) => {
      console.log('Logout successful', data);
    }, (error) => {
      console.log('Error during : Login!!', error);
    });
    this.router.navigate(['login'])
  }

}
