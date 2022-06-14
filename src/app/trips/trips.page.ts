import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsApi } from '../core/api/trips.api';
import { Trip } from '../core/api/trip.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trips-page',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {

  public trips$: Observable<Trip[]>;


  constructor( private tripsApi: TripsApi) {
    this.trips$ = tripsApi.getAll$();
  }

  onReload(){
    this.trips$ = this.tripsApi.getAll$();
  }

  ngOnInit(): void {
  }

}
