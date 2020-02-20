import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slopesList',
  templateUrl: './slopesList.component.html',
  styleUrls: ['./slopesList.component.css']
})
export class SlopesListComponent implements OnInit {

  constructor() {
    let slopesList: String[] = ['Zakopane', 'Krakow'];
   }

  ngOnInit() {

  }

}
