import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html'
})
export class PersonInputComponent {
  // @Input() addPerson;

  @Output() onAdd = new EventEmitter<string> ();

  addPerson(name): void {
    this.onAdd.emit(name);
  }

};
