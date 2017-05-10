import $ from 'jQuery';
import Rx from 'rxjs/Rx';

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

source$.switchMap(v => {
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