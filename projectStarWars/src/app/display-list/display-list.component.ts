import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { ItemModel } from "../models/ItemModel";
import { BackendApiService } from "../services/backend-api.service";

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  items:ItemModel[]; nameDisplay; detailDisplay = []; 
  currentPage:number = 1;
  nextP:boolean = true; preP:boolean = false; loading: boolean = true;

  constructor(private route: ActivatedRoute,
    private backendApi:BackendApiService) { }

  ngOnInit() {
    this.getParams();
  }

  //gets category from route link and calls backendApiService to get data for that category
  getParams() {
    let paramType;
    let paramPage = this.currentPage;
    this.route.params
    .subscribe((params) => {
      paramType = params['type']
    })
    return this.backendApi.getItems(paramType, paramPage).subscribe(items => {
      this.items = items;
      this.nameDisplay = this.items['results'];
      this.nextP = this.items['next'];
      this.preP = this.items['previous'];
      this.pullDetail(this.nameDisplay[0]);
      this.loading = false;
    });
  }

  //sets the variable where the detailed view portion of the application pulls data
  pullDetail(item) {
    this.detailDisplay = Object.entries(item);
    }

  //triggers loading display and calls function to pull updated data depending on page number. 
  nextPage() {
    this.loading = true;
    this.nextP = false;
    this.currentPage += 1;
    this.getParams()
  }

  prevPage() {
    this.loading = true;
    this.preP = false;
    this.currentPage -= 1;
    this.getParams()
  }
}
