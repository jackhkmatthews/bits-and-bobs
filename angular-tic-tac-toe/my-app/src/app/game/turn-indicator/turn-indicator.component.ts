import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'turn-indicator',
  templateUrl: './turn-indicator.component.html',
  styleUrls: ['./turn-indicator.component.scss']
})
export class TurnIndicatorComponent {
  @Input() xIsNext: boolean;

  @Output() onReset = new EventEmitter<boolean>();

  resetCells(): void {
    this.onReset.emit(true);
  }
}
