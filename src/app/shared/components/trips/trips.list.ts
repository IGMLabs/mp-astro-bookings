import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from '../../../core/api/trips.api';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css']
})
export class TripsList implements OnInit {

  @Input() public trips: Trip[];


  constructor(tripsApi: TripsApi) {
    this.trips = tripsApi.getAll();
  }

  ngOnInit(): void {
  }

  public getTripsLength() {
    return this.trips.length
  }


}
