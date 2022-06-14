import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsApi } from '../../core/api/trips.api';
import { Trip } from '../../core/api/trip.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css']
})
export class TripPage implements OnInit {

  public tripId: string;
  public trips$ : Observable<Trip>;

  constructor(route: ActivatedRoute,tripApi:TripsApi) {
    this.tripId = route.snapshot.paramMap.get('id') || '';
    this.trips$ = tripApi.getById$(this.tripId);
  }


  ngOnInit(): void {
  }

}
