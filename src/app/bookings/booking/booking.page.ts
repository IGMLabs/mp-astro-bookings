import { Component, OnInit } from '@angular/core';
import { Booking } from '../../core/api/booking.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookingsApi } from '../../core/api/bookings.api';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.css']
})
export class BookingPage {

  public bookingId: string;
  public booking$ : Observable<Booking>;

  constructor(route: ActivatedRoute,bookingApi:BookingsApi) {
    this.bookingId = route.snapshot.paramMap.get('id') || '';
    this.booking$ = bookingApi.getById$(this.bookingId);
  }


}
