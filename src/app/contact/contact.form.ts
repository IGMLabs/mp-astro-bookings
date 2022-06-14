import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationsService } from '../core/forms/form-validations.service';
import { FormUtilityService } from '../core/forms/form-utility.service';
import { FormMessagesService } from '../core/forms/form-messages.service';
import { FormBase } from '../core/forms/form.base';


interface Contact {
  name: string;
  email: string;
  message: string;
}


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css']
})
export class ContactForm extends FormBase implements OnInit {


  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    public fus: FormUtilityService,
    fms: FormMessagesService
    ){
    super(fms)
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    });
  }

  ngOnInit(): void {
  }


  public onSave() {
    const contact = this.form.value;
    const contactApi = {
      ...contact,
      email: contact.email.email
    }
    console.warn('Send contact message', contactApi);
  }

}
