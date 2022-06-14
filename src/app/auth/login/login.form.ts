import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import { FormValidationsService } from '../../core/forms/form-validations.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm implements OnInit {
  public form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    private fus: FormUtilityService,
    private fms: FormMessagesService) {

    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    });

  }

  ngOnInit(): void {
  }

  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }


  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }


  public onSave() {
    const { email, password } = this.form.value;
    const register = { email, password };
    console.warn('Send register', register);
  }

}
