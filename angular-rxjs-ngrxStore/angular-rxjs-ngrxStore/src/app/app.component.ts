import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject();

  clock;

  constructor() {
    this.clock = Observable.merge(
      this.click$,
      Observable.interval(1000)
    ).startWith(new Date())
      .scan((accumulator: Date, current) => {
        console.log(accumulator.getTime());

        return new Date((accumulator.getTime() + 1000));
      });
  }
}
