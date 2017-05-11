class Observable {
  constructor(observableFn) {
    this.subscribe = observableFn;
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

var teardown = source$.subscribe(
  {
    next(x) {
      console.log(x);
    },
    complete() {
      console.log('done');
    }
  }
);

setTimeout(() => {
  teardown();
}, 3000);
