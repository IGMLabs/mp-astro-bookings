import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';

interface Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm extends FormBase {

  constructor(formBuilder: FormBuilder, fvs : FormValidationsService, fms : FormMessagesService) {
    super(fms)

    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue])
    },
    {
      validators: [fvs.passwordMatch]
    })
  }

  public getPasswordMatchMessage() {
    const errors = this.form.errors;
    if (!errors) return ''
    if(errors['passwordMatch']) {
      return errors['passwordMatch']
    }

  }

  public onSave() {
    const { email, password } = this.form.value;
    const register = { email, password};
    console.warn('Send Contact message', register)
  }

}
