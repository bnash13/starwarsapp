import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ItemModel } from "../models/ItemModel";
import { SearchModel } from "../models/SearchModel";


@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  baseUrl = "http://localhost:8000/api/"

  constructor(private http:HttpClient) { }

  getItems(type:string, page:number):Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(`${this.baseUrl}${type}/${page}`);
  }

  searchItem(type:string, ref:string):Observable<SearchModel[]> {
    return this.http.get<SearchModel[]>(`${this.baseUrl}search/${type}/${ref}`)
  }
}
