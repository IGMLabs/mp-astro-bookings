import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormBase } from 'src/app/core/forms/form.base';
import { IdName } from '../../core/api/id-name.interface';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { AgenciesApi } from '../../core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  @Input() public ranges: IdName[];
  @Input() public statuses: string[] = [];
  @Output() public save = new EventEmitter<Agency>();


  constructor(formBuilder: FormBuilder, fms : FormMessagesService, public fus: FormUtilityService, idNameApi: IdNameApi, public agencyApi: AgenciesApi) {
    super(fms)
    this.ranges = idNameApi.getRanges();
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
    });
  }


  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.getDashIdAgency(name);
    const newAgencyData = { id, name, range, status };
    this.agencyApi.post(newAgencyData);
    this.save.emit(newAgencyData)
  }

  private getDashIdAgency(str: string): string {
    return this.fus.getDashIdAgency(str)
  }


  ngOnInit(): void {
  }
}
