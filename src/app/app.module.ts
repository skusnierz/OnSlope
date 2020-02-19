import { NavBarComponent } from './homeLayout/components/navBar/navBar.component';
import { HomeComponent } from './homeLayout/home.component';
import { RegisterComponent } from './registerLayout/register.component';
import { LoginLayoutComponent } from './loginLayout/loginLayout.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
   declarations: [
      AppComponent,
      LoginLayoutComponent,
      RegisterComponent,
      HomeComponent,
      NavBarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
