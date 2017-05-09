import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CellService } from '../shared/cell.service';

import { Cell } from '../shared/cell'
import { winningCombos } from '../shared/winning-combos';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  winningCombos = winningCombos;

  @Input() cells: Cell[];
  @Input() xIsNext: boolean;
  @Input() movesMade: number;
  @Input() winner: string;

  @Output() onMove = new EventEmitter<boolean>();
  @Output() onWin = new EventEmitter<string>();

  cellClick(cell: Cell) :void {
    if (!!cell.player || this.winner) return;
    this.updateCell(cell, this.xIsNext);
    this.movesMade++
    if (this.movesMade > 4) this.checkForWinner(this.xIsNext, this.cells, this.winningCombos)
    this.xIsNext = !this.xIsNext;
    this.onMove.emit(true);
  }

  updateCell(cell: Cell, xIsNext: boolean):void {
    if (xIsNext) {
      cell.html = 'x';
      cell.player = 'x';
    } else {
      cell.html = 'o';
      cell.player = 'o';
    }
  }

  checkForWinner(xIsNext: boolean, cells: Cell[], winningCombos: Array<any>){

    let isPlayerX = cell => {
      return cell.player === 'x';
    }
    let isPlayerO = cell => {
      return cell.player === 'o';
    }

    let currentPlayerCells = cells.filter(xIsNext? isPlayerX : isPlayerO);

    let currentPlayerIndexes = currentPlayerCells.reduce((acc, cur): Array<any> => {
      let index = cur.index
      return acc.concat(index);
    }, []);

    for (let combo of winningCombos) {
      if (currentPlayerIndexes.includes(combo[0]) &&
          currentPlayerIndexes.includes(combo[1]) &&
          currentPlayerIndexes.includes(combo[2])) {
            this.onWin.emit(this.xIsNext? 'x' : 'o');
          }
      }
  }

}
