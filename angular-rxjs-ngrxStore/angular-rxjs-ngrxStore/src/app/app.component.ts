import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mapTo';
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
      this.click$.mapTo('hour'),
      Observable.interval(1000).mapTo('second')
    ).startWith <Date|string> (new Date())
      .scan((acc: Date, curr) => {
        const date = new Date(acc.getTime());
        if (curr === 'hour' ) {
          date.setHours(date.getHours() + 1);
        };
        if (curr === 'second') {
          date.setSeconds(date.getSeconds() + 1);
        }
        console.log(date);
        return date;
      });
  }
}
