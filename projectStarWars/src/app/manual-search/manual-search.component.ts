import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from "rxjs";
import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";

import { BackendApiService } from "../services/backend-api.service";

@Component({
  selector: 'app-manual-search',
  templateUrl: './manual-search.component.html',
  styleUrls: ['./manual-search.component.css']
})
export class ManualSearchComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  isSearching: boolean = false;
  searchParam = {name: "", type: "people"};
  resultData = null; detailDisplay = []; resultCount = 1;

  constructor( private backendApi:BackendApiService ) {}

  ngOnInit() {
    //monitors for changes in search input field and calls searchItem api function
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.isSearching = true;
      console.log("running")
      this.searchParam.name = text;
      this.searchItem()
    })
  }

  //validates whether search input field is not empty and calls backendApi with category type and search keyword
  searchItem() {
    this.resultData = null;
    this.detailDisplay = [];
    if (this.searchParam.name.length > 1) {
      this.isSearching = true;
      this.backendApi.searchItem(this.searchParam.type, this.searchParam.name).subscribe(res => {
        this.resultData = res['results'];
        this.resultCount = res["count"];
        this.isSearching = false;
      })
    } else {
      this.resultCount = 1
      this.resultData = null;
      this.isSearching = false;
    }
  }

  pullDetail(item) {
    this.detailDisplay = Object.entries(item);
    }
}
