import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../core/api/booking.interface';
import { BookingsApi } from '../core/api/bookings.api';

@Component({
  selector: 'app-bookings-page',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.css']
})
export class BookingsPage implements OnInit {

  public bookings$ : Observable<Booking[]>;

  constructor(private bookingsApi:BookingsApi) {
    this.bookings$ = bookingsApi.getAll$();
  }

  ngOnInit(): void {
  }

}
