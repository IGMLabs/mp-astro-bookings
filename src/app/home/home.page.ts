import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/api/agencies.api';
import { TripsApi } from '../core/api/trips.api';
import { Trip } from '../core/api/trip.interface';
import { Agency } from '../core/api/agency.interface';
import { Observable } from 'rxjs';
import { Booking } from '../core/api/booking.interface';
import { BookingsApi } from '../core/api/bookings.api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomePage implements OnInit {

  public trips$: Observable<Trip[]>;
  public agencies$: Observable<Agency[]>;
  public bookings$: Observable<Booking[]>;

  constructor(tripsApi: TripsApi, agencyApi: AgenciesApi,bookingsApi:BookingsApi) {
    this.trips$ = tripsApi.getAll$();
    this.agencies$ = agencyApi.getAll$();
    this.bookings$ = bookingsApi.getAll$();
  }

  public reloading = false;

  public reload() {
    this.reloading = true;
  }
  ngOnInit(): void {
  }

}
