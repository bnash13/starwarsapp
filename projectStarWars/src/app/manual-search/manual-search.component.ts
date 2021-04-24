import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from "rxjs";
import { debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";

import { BackendApiService } from "../services/backend-api.service";

@Component({
  selector: 'app-manual-search',
  templateUrl: './manual-search.component.html',
  styleUrls: ['./manual-search.component.css']
})
export class ManualSearchComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  isSearching: boolean;

  searchParam = {name: null, type: "people"};
  resultData;

  constructor( private backednApi:BackendApiService ) {
    this.isSearching = false;
   }

  ngOnInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.isSearching = true;
      this.searchParam.name = text;
      this.searchItem()
    })
  }

  searchItem() {
    if (!this.searchParam.name) {
      return 0;
    }
    this.backednApi.searchItem(this.searchParam.type, this.searchParam.name).subscribe(res => {
      this.resultData = res;
      console.log(this.resultData);
    })
  }

}
