import { Component, Input, OnInit, Output } from '@angular/core';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agencie-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  @Input() agencies: Agency[] = [];
  @Output() private reload = new EventEmitter();
  public reloading = false;

  public onReloadClick(list: string) {
    this.reloading = true;
    console.log('reloading' + list);
    this.reload.emit();

  }

  ngOnInit(): void {
  }

  public getAgenciesLength() {
    return this.agencies.length
  }

}
