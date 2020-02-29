import { Component, OnInit } from '@angular/core';
import { trigger, query, style, animate, transition } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('1000ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('0ms', style({ opacity: 0 }))]
  )
]);

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [fadeAnimation]
})

export class FilterComponent implements OnInit {

  constructor() { }
  filterIsHidden = false;

  ngOnInit() {
  }

  toggleFilter() {
    this.filterIsHidden = !this.filterIsHidden;
  }
}
