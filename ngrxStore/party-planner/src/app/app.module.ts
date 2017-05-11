import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterSelectComponent } from './filter-select.component';
import { PersonInputComponent } from './person-input.component';
import { PersonListComponent } from './person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterSelectComponent,
    PersonInputComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
