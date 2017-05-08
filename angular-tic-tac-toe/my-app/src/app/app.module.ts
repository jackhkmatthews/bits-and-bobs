import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page.component';
import { TurnIndicatorComponent } from './turn-indicator.component';
import { BoardComponent } from './board.component';
import { GameComponent } from './game.component';

import { CellService } from './cell.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TurnIndicatorComponent,
    BoardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ CellService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
