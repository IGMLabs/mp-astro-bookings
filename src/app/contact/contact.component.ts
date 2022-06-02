import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public author = 'Miguel Pantin';
  public authorUrl = 'https://twitter.com/mikepantin'

  constructor() { }

  ngOnInit(): void {
  }

}
