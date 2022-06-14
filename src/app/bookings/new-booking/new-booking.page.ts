import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from '../../core/api/trips.api';
import { Booking } from '../../core/api/booking.interface';
import { BookingsApi } from '../../core/api/bookings.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.css']
})
export class NewBookingPage {

  public trips$: Observable<Trip[]>;

  constructor(tripsApi: TripsApi, private bookingApi: BookingsApi, private router: Router) {
    this.trips$ = tripsApi.getAll$();
  }

  onSave(newBookingData: Booking) {
    this.bookingApi
      .post$(newBookingData)
      .subscribe(() => {
        this.router.navigate(['/bookings']);
      });

  }
}
