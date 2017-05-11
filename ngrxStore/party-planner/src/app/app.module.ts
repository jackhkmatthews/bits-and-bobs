import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterSelectComponent } from './filter-select.component';
import { PersonInputComponent } from './person-input.component';
import { PersonListComponent } from './person-list.component';

import { people } from './people';

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
    HttpModule,
    StoreModule.provideStore({ people: people})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
