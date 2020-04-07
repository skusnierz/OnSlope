import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})

export class QueriesLoginService {

  public login = gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        username,
        id
      }
    }
  `;

  public logout = gql`
    mutation logout {
      logout
    }
  `;

  constructor() { }

}
