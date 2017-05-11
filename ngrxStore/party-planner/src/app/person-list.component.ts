import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl : './person-list.component.html'
})
export class PersonListComponent {
  @Input() people;

  @Output() onGuestAdd = new EventEmitter <string> ();
  @Output() onGuestRemove = new EventEmitter <string> ();

  addGuest(index){
    this.onGuestAdd.emit(index);
  }

  removeGuest(index){
    this.onGuestRemove.emit(index);
  }
};

