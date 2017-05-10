class Observable {
  constructor(observableFn) {
    this.subscribe = observableFn;
  }

  map(mapFn) {

    var mappedObservableFunction = (observer) => {
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
    };

    return new Observable(mappedObservableFunction);
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

var teardown = source$
  .map(x => x + '!')
  .subscribe({
    next(x) {
      console.log(x);
    }
  });

setTimeout(() => {
  teardown();
}, 3000);