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

  items:ItemModel[];
  nameDisplay;
  detailDisplay = [];
  currentPage = 1;
  nextP = true;
  preP = false;
  loading = true;

  constructor(private route: ActivatedRoute,
    private backendApi:BackendApiService) { }

  ngOnInit() {
    this.getParams();
  }

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

  pullDetail(item) {
    let temp = Object.entries(item);
    this.detailDisplay = [];
    for(let i = 0; i < 8; i++) {
      this.detailDisplay.push(temp[i]);
    }
  }

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
