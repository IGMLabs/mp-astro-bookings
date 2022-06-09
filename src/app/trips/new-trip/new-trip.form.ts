import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Agency } from 'src/app/core/api/agency.interface';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import { AgenciesApi } from '../../core/api/agencies.api';
import { TripsApi } from '../../core/api/trips.api';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css'],
})
export class NewTripForm extends FormBase implements OnInit {

  public agencies! : Agency[];

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    public fus : FormUtilityService,
    private agenciesApi: AgenciesApi,
    public tripsApi: TripsApi
  ) {
    super(fms);

    this.agencies = agenciesApi.getAll();

    this.form = formBuilder.group(
      {
        agencyId: new FormControl('', [Validators.required]),
        destination: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        places: new FormControl(1, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        startDate: new FormControl(),
        endDate: new FormControl('03/08/2002'),
      },
      {
        validators: [fvs.datesRange],
      }
    );
  }

  public onSubmitClick() {
    const { agencyId, destination } = this.form.value;
    const id = this.getDashIdTrip(destination, agencyId);
    const newTripData = { id, agencyId, destination };
    this.tripsApi.post(newTripData)
  }

  public getDatesRangeMessage() {
    const errors = this.form.errors;
    if (!errors) return '';
    if (errors['datesRange']) return errors['datesRange'];
    return '';
  }

  private getDashIdTrip(destino: string, id: string): string {
    return this.fus.getDashIdTrip(destino, id)
  }

  ngOnInit(): void {}
}
