import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {

  public reloading = false;

  public reload() {
    this.reloading = !this.reloading;

  }

}
