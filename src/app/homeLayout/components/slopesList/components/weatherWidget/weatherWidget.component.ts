import { Component, OnInit, Input } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';

@Component({
  selector: 'app-weatherWidget',
  templateUrl: './weatherWidget.component.html',
  styleUrls: ['./weatherWidget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  @Input() location: string;
  @Input() slopeName: string;

  constructor() { }
  settings: WeatherSettings;

  ngOnInit() {
  this.settings = {
    location: {
      cityName: this.location
    },
    backgroundColor: '#202020',
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
  }


}
