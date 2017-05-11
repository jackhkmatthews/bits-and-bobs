import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'app works!';

  public people;
  private id = 0;

  constructor(private store: Store<any>) {
    store.select('people')
      .subscribe(people => {
        this.people = people;
      });
  }

  addPerson(name) {
    this.store.dispatch({type: 'ADD_PERSON', payload: {
      id: ++this.id,
      name,
      guests: 0,
      attending: false
    }});
  }

  addGuest(person) {
    this.store.dispatch({type: 'ADD_GUESTS', payload: person});
  }

  removeGuest(person) {
    this.store.dispatch({type: 'REMOVE_GUESTS', payload: person});
  }

  removePerson(person) {
    this.store.dispatch({type: 'REMOVE_PERSON', payload: person});
  }

  toggleAttending(person) {
    this.store.dispatch({type: 'TOGGLE_ATTENDING', payload: person});
  }
}
