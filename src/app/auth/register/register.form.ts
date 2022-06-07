import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';

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
export class RegisterForm {

  public form: FormGroup;

  constructor(formBuilder: FormBuilder, fvs : FormValidationsService, public fms : FormMessagesService) {


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

  getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName)
  }

}
