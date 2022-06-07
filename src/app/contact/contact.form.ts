import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormMessagesService } from '../core/forms/form-messages.service';

interface Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css']
})
export class ContactForm implements OnInit {

  public form: FormGroup;

  constructor(formBuilder: FormBuilder, public fms : FormMessagesService) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)])
    })
  }

  ngOnInit(): void {
  }

  public hasError(controlName: string) {
    const control = this.getControl(controlName)
    if (!control) return false;
    return control.invalid
  }

  public mustShowError(controlName: string) {
    const control = this.getControl(controlName)
    if (!control) return false;
    return control.invalid && control.touched
  }

  public getErrorMessage(controlName: string) {
    return this.fms.getErrorMessage(this.form, controlName)
  }

  public onSave() {
    const contact = this.form.value;
    console.warn('Send Contact message', contact)
  }

  getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName)
  }

}
