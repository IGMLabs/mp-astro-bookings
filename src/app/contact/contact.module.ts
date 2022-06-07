import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactForm } from './contact.form';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactForm
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
