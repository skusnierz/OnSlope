import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  async canActivate() {
    if (await this.authService.isAuthenticated() === false) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
