import { Injectable } from '@angular/core';

import { Cell } from './cell';
import { CELLS } from './mock-cells'

@Injectable()
export class CellService {
  getCells(): Promise<Cell[]> {
    return Promise.resolve(CELLS);
  }
}
