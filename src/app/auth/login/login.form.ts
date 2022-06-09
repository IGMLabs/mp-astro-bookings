import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormBase } from '../../core/forms/form.base';

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
export class LoginForm extends FormBase implements OnInit {

  constructor(formBuilder: FormBuilder, fms : FormMessagesService) {
    super(fms)
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
    })
  }

  ngOnInit(): void {
  }

  public onSave() {
    const { name, email, password } = this.form.value;
    const register = {name, email, password};
    console.warn('Send Contact message', register)
  }

}
