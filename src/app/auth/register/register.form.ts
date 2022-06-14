import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder,fvs: FormValidationsService, public fus: FormUtilityService, public fms: FormMessagesService) {

    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue])
    }, {
      validators: [fvs.passwordMatch],
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

  public getPasswordMatchMessage(): string {
    return this.fms.getPasswordMatchMessage(this.form);
  }

  public onSave() {
    const { name, email, password } = this.form.value;
    const register = { name, email, password };
    console.warn('Send register',register);
  }

}
