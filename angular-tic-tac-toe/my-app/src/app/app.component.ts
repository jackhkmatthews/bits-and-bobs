import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>This is the app root</h1>
    <nav>
      <a routerLink="/landing">Landing</a>
      <a routerLink="/game">Game</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app works!';
}
