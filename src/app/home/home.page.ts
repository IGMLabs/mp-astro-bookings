import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {

  public reloading = false;

  public reload() {
    this.reloading = !this.reloading;

  }
  public agencies!: Agency[];

  constructor(private agenciesApi: AgenciesApi) {
    this.agencies = agenciesApi.getAll();
  }

  onReload() {
    this.agencies = this.agenciesApi.getAll();
  }

  ngOnInit(): void {}

}
