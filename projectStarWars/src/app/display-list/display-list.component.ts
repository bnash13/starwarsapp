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
  currentPage = 1;
  nextP; preP;

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
    });
  }

  nextPage() {
    this.currentPage += 1;
    this.getParams()
  }

  prevPage() {
    this.currentPage -= 1;
    this.getParams()
  }

}
