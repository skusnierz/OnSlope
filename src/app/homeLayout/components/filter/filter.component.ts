import { FilterService } from '../../../core/services/filter/filterSlopes.service';
import { Component, OnInit } from '@angular/core';
import { trigger, query, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';

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

  constructor(
    private filter: FilterService
  ) { }
  subscription: Subscription;
  slopes: any[] = [];
  filterIsHidden = false;
  searchText;

  ngOnInit() {
    this.subscription = this.filter.getSlopeList().subscribe( slopes => this.slopes = slopes);
    this.filter.updateSlopeList(this.slopes);
  }

  toggleFilter() {
    this.filterIsHidden = !this.filterIsHidden;
  }
}

