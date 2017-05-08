import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page.component';
import { TurnIndicatorComponent, BoardComponent, ModeNavigationComponent, GameComponent, CellService } from './game';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TurnIndicatorComponent,
    BoardComponent,
    ModeNavigationComponent,
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
