import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.control.html',
  styleUrls: ['./search.control.css']
})
export class SearchControl implements OnInit {
  @ViewChild('searchInput') public searchInput!: ElementRef;

  public searchInput$!: Observable<string>;

  constructor() {
    this.searchInput$ = fromEvent(
      this.searchInput.nativeElement ,
      'keyup')
      .pipe(
        map((event: unknown) => {return (event as any).target.value}),
        debounceTime(1000),
        tap((searchTerm) => console.log(searchTerm)),
        filter((searchTerm) => searchTerm.length > 2),
        distinctUntilChanged()
        )
   }

  ngOnInit(): void {
  }

}
