import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherWidgetComponent } from './homeLayout/components/slopesList/components/weatherWidget/weatherWidget.component';
import { FilterComponent } from './homeLayout/components/filter/filter.component';
import { SlopesListComponent } from './homeLayout/components/slopesList/slopesList.component';
import { NavBarComponent } from './homeLayout/components/navBar/navBar.component';
import { HomeComponent } from './homeLayout/home.component';
import { RegisterComponent } from './registerLayout/register.component';
import { LoginLayoutComponent } from './loginLayout/loginLayout.component';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AngularWeatherWidgetModule.forRoot({
      key: '324b4cddbd3fb6d4f421e721e2b3feb9',
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    }),
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'http://localhost:4000/graphql'
        })
      };
    },
    deps: [HttpLink]
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
