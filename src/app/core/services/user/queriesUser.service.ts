import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class QueriesUserService {

constructor() { }

  public currentLogUser = gql`
    query user {
      user {
        username,
        id
      }
    }
  `;

}
