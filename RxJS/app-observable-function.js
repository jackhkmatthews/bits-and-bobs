// the observable stream
var myObservableStream = (observer) => {
  var i = 0;
  var id = setInterval(() => {
    observer.next(i++);
    if (i === 10) observer.complete();
  }, 200);
  return () => clearInterval(id);
};

// subscribing to the observable with am observer
var teardown = myObservableStream({
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
  teardown();
}, 3000);

