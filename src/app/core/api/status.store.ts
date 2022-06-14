import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';



export interface ApiStatus {
  isWorking: boolean;
  errorMessage: string;
}

@Injectable({
  providedIn:'root'
})
export class StatusStore {

  private initialState: ApiStatus = {
    isWorking: false,
    errorMessage: ''
  }
  private state$: BehaviorSubject<ApiStatus> = new BehaviorSubject(this.initialState);

  public setState(newState: ApiStatus) {
    this.state$.next(this.initialState);
  }

  public getState$(): Observable<ApiStatus> {
    return this.state$.asObservable();
  }






}
