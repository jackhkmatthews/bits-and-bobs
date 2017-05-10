var myObservable = (observer) => {
  var i = 0;
  var id = setInterval(() => {
    observer.next(i++);
    if (i === 10) observer.complete();
  }, 200);
  return () => clearInterval(id);
};


var source1 = myObservable;

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