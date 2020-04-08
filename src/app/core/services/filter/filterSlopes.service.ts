import { Slope } from '../../interfaces/slope';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filteredSlopesList = new Subject<Slope[]>();
  constructor() { }

  filterSlopes(searchText: string, slopesList: Slope[]) {
    return slopesList.filter( slope => (slope.location.includes(searchText) || slope.name.includes(searchText) ));
  }

  updateSlopeList(filteredSlopes: Slope[]) {
    this.filteredSlopesList.next(filteredSlopes);
  }

  getSlopeList(): Observable<Slope[]> {
    return this.filteredSlopesList.asObservable();
  }

}
