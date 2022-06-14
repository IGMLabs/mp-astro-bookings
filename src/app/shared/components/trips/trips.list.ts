import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TripsApi } from '../../../core/api/trips.api';
import { Trip } from '../../../core/api/trip.interface';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css']
})
export class TripsList implements OnInit {


  @Input() public trips: Trip[] = [];
  @Output() private reload = new EventEmitter();


  ngOnInit(): void {
  }


  public getTripsLength() {
    return this.trips.length;
  }


  public onReloadClick() {
    this.reload.emit();
  }


}
