import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people = [
    {
      name: 'Jack',
      guests: 0,
      attending: false
    },
    {
      name: 'Vanda',
      guests: 0,
      attending: false
    },
    {
      name: 'Chris',
      guests: 0,
      attending: false
    },
    {
      name: 'Flo',
      guests: 0,
      attending: false
    },
  ];

  title = 'app works!';

  addPerson(name) {
    this.people.push({ name, guests: 0, attending: false});
  }

  addGuest(index) {
    this.people[index].guests ++;
  }
}
