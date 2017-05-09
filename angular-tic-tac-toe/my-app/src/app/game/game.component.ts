import { Component } from '@angular/core';

import { CellService } from './shared/cell.service';

import { Cell } from './shared/cell'

@Component({
  selector: 'game',
  templateUrl: './game.component.html'
})
export class GameComponent {
  cells: Cell[];
  xIsNext: boolean = true;
  movesMade: number = 0;

  constructor(private cellService: CellService){}

  ngOnInit(): void {
    this.getCells()
  }

  getCells(): void {
    this.cellService.getCells().then(cells => this.cells = cells)
  }

  onMove(move: boolean): void {
    this.xIsNext = !this.xIsNext;
  }

  onReset(reset: boolean): void {
    for (let cell of this.cells) {
      cell.player = null;
      cell.html = '.';
      }
    this.movesMade = 0;
  }

}
