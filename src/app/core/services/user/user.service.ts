import { Apollo } from 'apollo-angular';
import { User } from './../../interfaces/user';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentLogUserQuery = gql`
    query user {
      user {
        username,
        id
      }
    }
  `;

  currentUser: User;

  constructor(
    private apollo: Apollo
  ) { }

  async getUser() {
    await this.apollo.query(
      { query: this.currentLogUserQuery }
    ).toPromise().then(
      res => {
        this.currentUser = res.data['user'];
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
