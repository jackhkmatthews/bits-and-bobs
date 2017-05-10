var myObservable = (observer) => {
  var i = 0;
  var id = setInterval(() => {
    observer.next(i++);
    if (i === 10) observer.complete();
  }, 200);
  return () => clearInterval(id);
};

var map = (observable, mapFn) => {
  return (observer) => {
    return observable({
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
}


var source1 = map(myObservable, x => x + '!');

var teardown1 = source1({
  next(x) { 
    console.log(x);
  },
  error(err) { 
    console.error(err); 
  },
  complete() { 
    console.info('done'); 
  }
});

setTimeout(() => {
  teardown1();
}, 3000);

var source2 = myObservable;

var teardown2 = source2({
  next(x) { 
    console.log(x);
  },
  error(err) { 
    console.error(err); 
  },
  complete() { 
    console.info('done'); 
  }
});

setTimeout(() => {
  teardown2();
}, 3000);