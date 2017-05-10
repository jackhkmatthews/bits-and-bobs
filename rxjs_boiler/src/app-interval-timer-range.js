import $ from 'jQuery';
import Rx from 'rxjs/Rx';

// const source$ = Rx.Observable.interval(1000)
//   .take(5);

// source$.subscribe(
//   x => {
//     console.log(x);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log('completed');
//   }
// )

// const source$ = Rx.Observable.timer(5000, 1000);

// source$.subscribe(
//   x => {
//     console.log(x);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log('completed');
//   }
// );

const source$ = Rx.Observable.range(0, 5);

source$.subscribe(
  x => {
    console.log(x);
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log('completed');
  }
);