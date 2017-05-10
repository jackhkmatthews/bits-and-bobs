class Observable {
  constructor(observableFn) {
    this.subscribe = observableFn;
  }

  map(mapFn) {

    var mappedObservableFunction = (observer) => {
      return this.subscribe({
        //this is the observer which is passed into the
        //original ovbservableFn (this.subscribe)

        //next() is then passed i++ from the original
        //original ovbservableFn (this.subscribe)
        next(x) { 
          //i++ is then operated on by the mapFn
          //new value passed to the observer which will be passed
          //into the new Observable() below at .subscribe({})

          //if .mapped again this would look something like:
          //observer.next(mapFn(mapFn(x)));
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

    //returns a standard new Observable which can also be mapped
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