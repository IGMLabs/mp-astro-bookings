import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title = 'ab-astro-bookings';
  public subtitle = 'Atro Bookings';
  public author = 'Miguel Pantin';
  public authorUrl = 'https://twitter.com/mikepantin'

  constructor() { }

  ngOnInit(): void {
  }

}
