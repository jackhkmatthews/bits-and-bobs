class Observable {
  constructor(observableFn) {
    this.subscribe = observableFn;
  }

  map(mapFn) {
    return new Observable((observer) => {
      return this.subscribe({
        next(x) { 
          observer.next(mapFn(x));
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        }
      });
    });
  }
}

var myObservableFn = (observer) => {
  var i = 0;
  var id = setInterval(() => {
    observer.next(i++);
    if (i === 10) observer.complete();
  }, 200);
  return () => clearInterval(id);
};

var source$ = new Observable(myObservableFn);

// var teardown = source$
//   .map(x => x + '!')
// returns an object of class Observable with method subscribe...
//   // .map(x => x + '?')
//   // .map(x => x + '.')
//   .subscribe({
//     next(x) { 
//       console.log(x);
//     },
//     complete() {
//       console.log('done');
//     }
//   });

// returns an object of class Observable with method subscribe...
console.log(source$.map(x => x + '!').map(x => x + '!'));

// setTimeout(() => {
//   teardown();
// }, 3000);