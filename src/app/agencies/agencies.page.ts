import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/api/agency.interface';
import { AgenciesApi } from '../core/api/agencies.api';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-agencies-page',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage {

  //public agencies!: Agency[];
  public agencies$: Observable<Agency[]>;
  public error: boolean = false;

  // private subscriptor = {
  //   next: (data:Agency[]) => {
  //     //this.agencies = data;
  //   },
  //   error: (err:Error) => {
  //     console.log('hay un fallo',err.message);
  //     this.error = true;
  //   }
  // }

  constructor(private agenciesApi: AgenciesApi) {
    //agenciesApi.getAll$().subscribe(this.subscriptor);
    this.agencies$ = this.agenciesApi.getAll$()
  }


  //ESTO ES COMO NO HACERLO
  onReload() {
    this.agenciesApi.getAll$().subscribe(
      (data) => {
        //this.agencies = data
      },
      (err) => {
        console.log('hay un fallo');
        this.error = true;
      });
  }
}
