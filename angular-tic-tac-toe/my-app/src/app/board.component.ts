import { Component } from '@angular/core';

let CELLS: {index: number, player: any}[] = [
    {
      index: 0,
      player: null
    },
    {
      index: 1,
      player: null
    },
    {
      index: 2,
      player: null
    },
    {
      index: 3,
      player: null
    },
    {
      index: 4,
      player: null
    },
    {
      index: 5,
      player: null
    },
    {
      index: 6,
      player: null
    },
    {
      index: 7,
      player: null
    },
    {
      index: 8,
      player: null
    }
  ]

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  cells = CELLS
}
