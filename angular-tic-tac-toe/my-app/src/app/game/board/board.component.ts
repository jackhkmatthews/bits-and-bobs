import { Component, Input } from '@angular/core';

import { CellService } from '../shared/cell.service';

import { Cell } from '../shared/cell'

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  cells: Cell[];
  @Input() xIsNext: boolean;

  constructor(private cellService: CellService){}

  ngOnInit(): void {
    this.getCells()
  }

  getCells(): void {
    this.cellService.getCells().then(cells => this.cells = cells)
  }

  cellClick(cell: Cell) :void {
    if (!!cell.player) return;
    this.updateCell(cell, this.xIsNext);
    this.xIsNext = !this.xIsNext;
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

}

// on click change the inner html to x or o depending on who's turn it is
// set xIsNext variable to true
// display on screen
// change on click

// if cell hasnt been played
// update cell player and html
