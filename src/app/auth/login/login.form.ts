import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormMessagesService } from '../../core/forms/form-messages.service';

interface Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm implements OnInit {

  public form: FormGroup;

  constructor(formBuilder: FormBuilder, public fms : FormMessagesService) {
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
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
    const { name, email, password } = this.form.value;
    const register = {name, email, password};
    console.warn('Send Contact message', register)
  }

  getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName)
  }

}
