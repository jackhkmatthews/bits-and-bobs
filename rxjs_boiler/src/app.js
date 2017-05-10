import $ from 'jQuery';
import Rx from 'rxjs/Rx';

// Rx.Observable.of('Hello')
//   .merge(Rx.Observable.of('people'))
//   .subscribe(x => {
//     console.log(x);
//   });

// Rx.Observable.interval(2000)
//   .merge(Rx.Observable.interval(500))
//   .take(25)
//   .subscribe(x => console.log(x));


const source1$ = Rx.Observable.interval(2000)
  .map(v => 'Merge1: ' + v);

const source2$ = Rx.Observable.interval(500)
  .map(v => 'Merge2: ' + v);

Rx.Observable.merge(source1$, source2$)
  .take(25)
  .subscribe(x => {
    console.log(x);
  });