import { AuthGuardService } from './core/services/auth/authGuard.service';
import { LoginLayoutComponent } from './loginLayout/loginLayout.component';
import { HomeComponent } from './homeLayout/home.component';
import { RegisterComponent } from './registerLayout/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginLayoutComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
