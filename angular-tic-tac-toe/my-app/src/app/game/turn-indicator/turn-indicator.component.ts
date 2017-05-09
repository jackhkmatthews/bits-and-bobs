import { Component, Input } from '@angular/core';

@Component({
  selector: 'turn-indicator',
  templateUrl: './turn-indicator.component.html',
  styleUrls: ['./turn-indicator.component.scss']
})
export class TurnIndicatorComponent {
  @Input() xIsNext: boolean;
}
