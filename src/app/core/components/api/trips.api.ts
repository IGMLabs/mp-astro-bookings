import { Injectable } from '@angular/core';
import { Trip } from './trip.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';


@Injectable({
  providedIn: 'root'
})
export class TripsApi extends CrudApi<Trip> {
  constructor(http: HttpClient,statusStore:StatusStore) {
    super(http, 'trips',statusStore);
  }
}
