import { Slope } from './../../../core/interfaces/slope';
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

  slopesList: Array<Slope> = [
    {name: 'Jaworzyna Krynicka', location: 'Krynica-Zdroj'},
    {name: 'Kotelnica Białczańska', location: 'Białka Tatrzańska'},
    {name: 'Kaniówka Stacja Narciarska', location: 'Białka Tatrzańska'},
    {name: 'Nosal - Wyciąg Narciarski', location: 'Zakopane'},
    {name: 'Rusin-Ski', location: 'Bukowina Tatrzańska'},
    {name: 'Palenica Stok Narciarski', location: 'Szczawnica'},
    {name: 'Suche Ośrodek Narciarski Wyciągi', location: 'Poronin'},
    {name: 'Czorsztyn-Ski', location: 'Kluszkowce'},
    {name: 'Stacja Narciarska Małe Ciche', location: 'Murzasichle'},
    {name: 'Olczań-Ski', location: 'Bukowina Tatrzańska'},
  ];

  constructor() {
   }

  ngOnInit() {
  }
}
