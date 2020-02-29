import { WeatherWidgetComponent } from './homeLayout/components/slopesList/components/weatherWidget/weatherWidget.component';
import { FilterComponent } from './homeLayout/components/filter/filter.component';
import { SlopesListComponent } from './homeLayout/components/slopesList/slopesList.component';
import { NavBarComponent } from './homeLayout/components/navBar/navBar.component';
import { HomeComponent } from './homeLayout/home.component';
import { RegisterComponent } from './registerLayout/register.component';
import { LoginLayoutComponent } from './loginLayout/loginLayout.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      LoginLayoutComponent,
      RegisterComponent,
      HomeComponent,
      NavBarComponent,
      SlopesListComponent,
      FilterComponent,
      WeatherWidgetComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FontAwesomeModule,
      NgxPaginationModule,
      AngularWeatherWidgetModule.forRoot({
         key: '324b4cddbd3fb6d4f421e721e2b3feb9',
         name: WeatherApiName.OPEN_WEATHER_MAP,
         baseUrl: 'http://api.openweathermap.org/data/2.5'
       })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
