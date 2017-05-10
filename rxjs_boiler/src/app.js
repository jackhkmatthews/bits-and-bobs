import $ from 'jQuery';
import Rx from 'rxjs/Rx';

// Rx.Observable.of('hello')
//   .subscribe(v => {
//     Rx.Observable.of(v + ' everyone!')
//       .subscribe(x => console.log(x));
//   });

// Rx.Observable.of('Hello')
//   .mergeMap(v => {
//     return Rx.Observable.of(v + ' Everyone');
//   })
//   .subscribe(x => console.log(x));

// Rx.Observable.from([1, 3, 5])
//   .interval(2000)
//   .mergeMap(v => {
//     return Rx.Observable.of(v*10)
//       .interval(1000);
//   });

//        ||
// BAD  \ || /
//       \||/
//        \/

// const source$ = new Rx.Observable(observer => {
//   setTimeout(() => {
//     observer.next(1);
//   }, 0);

//   setTimeout(() => {
//     observer.next(3);
//   }, 3000);

//   setTimeout(() => {
//     observer.next(5);
//   }, 4000);

// });

// source$.subscribe(v => {
//   return new Rx.Observable(observer => {
//     setTimeout(() => {
//       observer.next(v*10);
//     }, 0);
//     setTimeout(() => {
//       observer.next(v*10);
//     }, 1000);
//     setTimeout(() => {
//       observer.next(v*10);
//     }, 2000);
//   }).subscribe(v => {
//     console.log(v);
//   });
// });


//        ||
// GOOD \ || /
//       \||/
//        \/
const source$ = new Rx.Observable(observer => {
  setTimeout(() => {
    observer.next(1);
  }, 0);

  setTimeout(() => {
    observer.next(3);
  }, 3000);

  setTimeout(() => {
    observer.next(5);
  }, 4000);

});

source$.mergeMap(v => {
  return new Rx.Observable(observer => {
    setTimeout(() => {
      observer.next(v*10);
    }, 0);
    setTimeout(() => {
      observer.next(v*10);
    }, 1000);
    setTimeout(() => {
      observer.next(v*10);
    }, 2000);
  });
})
  .subscribe(v => {
    console.log(v);
  });
