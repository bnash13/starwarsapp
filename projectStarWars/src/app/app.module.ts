import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { DisplayListItemComponent } from './display-list-item/display-list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManualSearchComponent } from './manual-search/manual-search.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayListComponent,
    DisplayListItemComponent,
    NavBarComponent,
    ManualSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
