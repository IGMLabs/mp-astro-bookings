import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/core/api/booking.interface';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings.list.html',
  styleUrls: ['./bookings.list.css']
})
export class BookingsList implements OnInit {

  @Input() bookings : Booking[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  getBookingsLength(){

  }

  onReloadClick(){

  }

}
