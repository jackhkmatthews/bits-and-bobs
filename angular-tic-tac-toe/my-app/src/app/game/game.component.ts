import { Component } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html'
})
export class GameComponent {
  xIsNext: boolean = true;

  onMove(move: boolean): void {
    this.xIsNext = !this.xIsNext;
  }
}
