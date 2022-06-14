import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ValidationErrors, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import { FormBase } from '../../core/forms/form.base';
import { Agency } from '../../core/api/agency.interface';
import { AgenciesApi } from '../../core/api/agencies.api';
import { Trip } from '../../core/api/trip.interface';
import { TripsApi } from '../../core/api/trips.api';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css']
})
export class NewTripForm extends FormBase implements OnInit  {


  @Input() public agencies : Agency[]= [];
  @Output() public save = new EventEmitter<Trip>();

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    private fus:FormUtilityService,
    fms: FormMessagesService,
    private tripsApi : TripsApi
  ) {
    super(fms);
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

  ngOnInit(): void {}

  private getDashId(str: string): string {
    return this.fus.getDashIdAgency(str);
  }

  onSave() {
    const { destination, agencyId, places, flightPrice, startDate, endDate } =
      this.form.value;
    const id = this.getDashId(destination);
    const newTripData = {
      id,
      destination,
      agencyId,
      places,
      flightPrice,
      startDate,
      endDate,
    };
    console.warn('Send trip data ', newTripData);
    this.save.emit(newTripData);
  }


}


