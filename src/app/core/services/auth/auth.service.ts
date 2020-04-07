import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  public async isAuthenticated() {
    await this.userService.getUser();
    return this.userService.currentUser !== undefined;
  }

}
