import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { IdName } from 'src/app/core/api/id-name.interface';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.css']
})
export class NewAgencyPage implements OnInit {
  public ranges: IdName[];
  public statuses: string[] = [];



  constructor(public agencyApi: AgenciesApi, idNameApi: IdNameApi) {
    this.statuses = idNameApi.getStatuses()
    this.ranges = idNameApi.getRanges();
  }

  onSave(newAgencyData: Agency) {
    this.agencyApi.post(newAgencyData);
  }

  ngOnInit(): void {
  }

}
