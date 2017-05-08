import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';
import { GameComponent } from './game.component';

const routes = [
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
