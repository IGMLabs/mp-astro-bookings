import { Component, OnInit } from '@angular/core';
import { IdName } from 'src/app/core/api/id-name.interface';
import { IdNameApi } from '../../core/api/id-name.api';
import { AgenciesApi } from '../../core/api/agencies.api';
import { Agency } from '../../core/api/agency.interface';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.css']
})
export class NewAgencyPage implements OnInit {

  public ranges:IdName[] = [];
  public statuses;

  constructor(idNameApi : IdNameApi, private agenciesApi: AgenciesApi) {
    this.ranges = idNameApi.getRanges();
    this.statuses = idNameApi.getStatuses();
  }

  ngOnInit(): void {
  }

  onSave(newAgencyData:Agency){
    console.log("hola");
    this.agenciesApi.post$(newAgencyData).subscribe(() => {});
  }

}
