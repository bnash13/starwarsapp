import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ItemModel } from "../models/ItemModel";


@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  baseUrl = "http://localhost:8000/api/"

  constructor(private http:HttpClient) { }

  getItems(type, page):Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(`${this.baseUrl}${type}/${page}`);
  }
}
