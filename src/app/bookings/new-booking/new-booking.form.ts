import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../core/api/trip.interface';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormBase } from '../../core/forms/form.base';
import { Booking } from 'src/app/core/api/booking.interface';
import { FormUtilityService } from '../../core/forms/form-utility.service';

@Component({
  selector: 'app-new-booking-form',
  templateUrl: './new-booking.form.html',
  styleUrls: ['./new-booking.form.css']
})
export class NewBookingForm extends FormBase implements OnInit {

  @Input() public trips: Trip[]=[];
  @Output() public save = new EventEmitter<Booking>();

  constructor(formBuilder: FormBuilder, fms : FormMessagesService,
    fvs: FormValidationsService,
      private fus: FormUtilityService,) {
        super(fms);

    this.form = formBuilder.group({
      tripId: new FormControl('', [Validators.required] ),
      passengerName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)], ),
      date: new FormControl('', [Validators.required, fvs.dateControlBookings], ),
      luggageKilos: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)], ),
      hasPremiumFoodPrice: new FormControl(true, ),
    });
  }


  public onSubmitClick() {
    const {tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice  } = this.form.value;
    const id = this.getDashIdAgency(passengerName);
    const newBookingData = { id, tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice };
    console.warn('Send booking data ', newBookingData);
    this.save.emit(newBookingData);
  }

  private getDashIdAgency(str: string): string {
    return this.fus.getDashIdAgency(str);
  }

  getDateMessage() {
    const errors = this.form.errors;
    if (!errors) {
      return '';
    }
    if (errors['dateControl']) {
      return errors['dateControl'];
    }
    return '';
  }

  ngOnInit(): void {}
}
