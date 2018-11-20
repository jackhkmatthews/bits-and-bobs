var Rx = require('rxjs/Rx');

var subject = new Rx.Subject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(1);
// subject.next(2);

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

var observable = Rx.Observable.from([1, 2, 3]);

observable.subscribe(subject);


var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('hi')
  }, 1000);
});

observable.subscribe(value => console.log(value));
observable.subscribe(value => console.log(value));