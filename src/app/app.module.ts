import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerSimpleComponent } from './components/planner/planner-simple/planner-simple.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { PlannerComponent } from './components/planner/planner.component';
import { PlannerWithCheckboxesComponent } from './components/planner/planner-with-checkboxes/planner-with-checkboxes.component';
import { PlannerWithCheckboxesAndFilterComponent } from './components/planner/planner-with-checkboxes-and-filter/planner-with-checkboxes-and-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PlannerSimpleComponent,
    HeaderComponent,
    PlannerComponent,
    PlannerWithCheckboxesComponent,
    PlannerWithCheckboxesAndFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
