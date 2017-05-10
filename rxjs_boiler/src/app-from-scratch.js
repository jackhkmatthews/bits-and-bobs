import $ from 'jQuery';
import Rx from 'rxjs/Rx';

const source$ = new Rx.Observable(observer => {
  observer.next('HEllo World');
  observer.next('Another Value');

  observer.error(new Error('Error: Something went wrong'));

  setTimeout(() => {
    observer.next('Yet another value');
    observer.complete();
  }, 3000);

});

source$
.catch(err => Rx.Observable.of(err))
.subscribe(
  x => {
    console.log(x);
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log('completed');
  }
);
