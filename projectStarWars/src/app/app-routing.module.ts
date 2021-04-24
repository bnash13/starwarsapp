import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayListComponent } from "../app/display-list/display-list.component";
import { ManualSearchComponent } from "../app/manual-search/manual-search.component";


const routes: Routes = [
  { path: 'peeps/:type', component: DisplayListComponent },
  { path: 'rocks/:type', component: DisplayListComponent },
  { path: 'vehicle/:type', component: DisplayListComponent },
  { path: 'search', component: ManualSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
