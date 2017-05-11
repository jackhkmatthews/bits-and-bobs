import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl : './person-list.component.html'
})
export class PersonListComponent {
  @Input() people;

  @Output() onGuestAdd = new EventEmitter <string> ();
  @Output() onGuestRemove = new EventEmitter <string> ();
  @Output() onPersonRemove = new EventEmitter <string> ();
  @Output() onToggle = new EventEmitter <string> ();

  addGuest(index){
    this.onGuestAdd.emit(index);
  }

  removeGuest(index){
    this.onGuestRemove.emit(index);
  }

  removePerson(index){
    this.onPersonRemove.emit(index);
  }

  toggleAttending(index){
    this.onToggle.emit(index);
  }
};

