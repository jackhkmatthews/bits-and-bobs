import { Component } from '@angular/core';

import { CellService } from './cell.service';

import { Cell } from './cell'

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  cells: Cell[];

  constructor(private cellService: CellService){}

  ngOnInit(): void {
    this.getCells()
  }

  getCells(): void {
    this.cellService.getCells().then(cells => this.cells = cells)
  }

}
