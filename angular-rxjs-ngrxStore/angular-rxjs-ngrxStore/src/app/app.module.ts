import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { clock, people } from './reducers';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({clock, people})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
