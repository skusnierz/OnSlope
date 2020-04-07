import { QueriesUserService } from './queriesUser.service';
import { Apollo } from 'apollo-angular';
import { User } from './../../interfaces/user';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loading: boolean;
  currentUser: User;

  constructor(
    private apollo: Apollo,
    private queriesUserService: QueriesUserService
  ) { }

  async getUser() {
    await this.apollo.query(
      { query: this.queriesUserService.currentLogUser }
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
