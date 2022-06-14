import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormControl, Validators} from '@angular/forms';
import { FormBase } from 'src/app/core/forms/form.base';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { IdName } from '../../core/api/id-name.interface';
import { AgenciesApi } from '../../core/api/agencies.api';
import { Agency } from '../../core/api/agency.interface';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css']
})
export class NewAgencyForm extends FormBase implements OnInit {

  @Input() public ranges:IdName[] = [];
  @Input() public statuses:string[]=[];
  @Output() public save = new EventEmitter<Agency>();

  constructor(
    formBuilder: FormBuilder,
    private fvs: FormValidationsService,
    fms: FormMessagesService,
    private agenciesApi: AgenciesApi
  ) {
    super(fms)
    this.form = formBuilder.group(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        range: new FormControl('', [Validators.required]),
        status: new FormControl(this.statuses[0]),
      }
    );
  }


  ngOnInit(): void { }

  private getDashId(str: string): string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.getDashId(name);
    const newAgencyData = { id, name, range, status };
    this.save.emit(newAgencyData);
  }

}
