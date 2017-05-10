class Observable {
  constructor(observableFn) {
    this.subscribe = observableFn;
  }

  map(mapFn) {
    console.log('mapFn: ', mapFn);
    return new Observable(this.subscribe);
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