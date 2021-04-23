import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from "../models/ItemModel";

@Component({
  selector: 'app-display-list-item',
  templateUrl: './display-list-item.component.html',
  styleUrls: ['./display-list-item.component.css']
})
export class DisplayListItemComponent implements OnInit {
  @Input() item: ItemModel;

  constructor() { }

  ngOnInit() {
  }

}
