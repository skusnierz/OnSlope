import { Component, OnInit } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';


@Component({
  selector: 'slopeDetails',
  templateUrl: './slopeDetails.component.html',
  styleUrls: ['./slopeDetails.component.css']
})
export class SlopeDetailsComponent implements OnInit {
  constructor() { }

  settings: WeatherSettings = {
    location: {
      cityName: 'Zakopane'
    },
    backgroundColor: 'rgba(10, 10, 10, 0.80)',
    color: '#ffffff',
    width: 'auto',
    height: '300px',
    showWind: true,
    scale: TemperatureScale.CELCIUS,
    forecastMode: ForecastMode.DETAILED,
    showDetails: false,
    showForecast: true,
    layout: WeatherLayout.WIDE,
    language: 'en'
  };
  ngOnInit() {
  }

}
