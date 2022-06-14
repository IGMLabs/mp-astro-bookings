import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public title = 'Astro Bookings';
  public subtitle = 'Welcome on board';
  public authorUrl = 'https://www.google.es';
  public author = 'Mike Pantin';
  constructor() { }

  ngOnInit(): void {
  }

}
