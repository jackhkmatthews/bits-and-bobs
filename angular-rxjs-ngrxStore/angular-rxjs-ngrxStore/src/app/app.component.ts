import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mapTo';
import {Subject} from 'rxjs/Subject';
import {Store} from '@ngrx/store';
import {SECOND, HOUR} from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject()
    .map((num) => ({type: HOUR, payload: +num}));

  seconds$ = Observable.interval(1000).mapTo({type: SECOND, payload: 1});

  time;
  people;

  constructor(store: Store<any>) {
    this.time = store.select('clock');
    this.people = store.select('people');

    Observable.merge(
      this.click$, 
      this.seconds$
    )
      .subscribe((action) => {
        store.dispatch(action);
      });
  }
}
