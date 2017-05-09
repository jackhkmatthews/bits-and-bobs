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

  @Output() onMove = new EventEmitter<boolean>();

  cellClick(cell: Cell) :void {
    if (!!cell.player) return;
    this.updateCell(cell, this.xIsNext);
    this.movesMade++
    // if (this.movesMade > 4) this.checkForWinner(this.xIsNext, this.cells, this.winningCombos)
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

  // checkForWinner(xIsNext: boolean, cells: Cell[], winningCombos: Array<any>){
  //   for (let combo of winningCombos) {
  //     let cell0 = element[0];
  //   }
  // }

//   function checkForWinner(){
//   vm.winningBoxCombinations.forEach((element) => {
//     const box0 = element[0];
//     const box1 = element[1];
//     const box2 = element[2];
//     if (vm.playerOCells.includes(box0) && vm.playerOCells.includes(box1) && vm.playerOCells.includes(box2)){
//       vm.attributeWinningClass(box0, box1, box2);
//       vm.winner = true;
//       console.log('player O wins');
//     }
//     if (vm.playerXCells.includes(box0) && vm.playerXCells.includes(box1) && vm.playerXCells.includes(box2)){
//       vm.attributeWinningClass(box0, box1, box2);
//       vm.winner = true;
//       console.log('player X wins');
//     }
//   });
// }

}

// on click change the inner html to x or o depending on who's turn it is
// set xIsNext variable to true
// display on screen
// change on click

// if cell hasnt been played
// update cell player and html
