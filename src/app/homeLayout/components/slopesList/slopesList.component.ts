import { Component, OnInit } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('200ms', animate('2000ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);

@Component({
  selector: 'slopesList',
  templateUrl: './slopesList.component.html',
  styleUrls: ['./slopesList.component.css'],
  animations: [listAnimation]
})

export class SlopesListComponent implements OnInit {
  p: number = 1;
  items = [0, 1, 2, 3, 4, 5, 6];
  settings: WeatherSettings = {
    location: {
      cityName: 'Podstolice'
    },
    backgroundColor: '#101010',
    color: '#ffffff',
    width: '200px',
    height: 'auto',
    showWind: false,
    scale: TemperatureScale.CELCIUS,
    forecastMode: ForecastMode.GRID,
    showDetails: false,
    showForecast: false,
    layout: WeatherLayout.WIDE,
    language: 'en'
  };

  constructor() {
    let slopesList: string[] = ['Zakopane', 'Krakow'];
   }

  ngOnInit() {

  }

  refresh() {
    console.log('marcin');
  }
}
