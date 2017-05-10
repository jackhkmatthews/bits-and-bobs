import $ from 'jQuery';
import Rx from 'rxjs/Rx';

// const myPromise = new Promise((resolve, reject) => {
//   console.log('Creating Promise');
//   setTimeout(() => {
//     resolve('Hello from promise');
//   }, 3000);
// });

// myPromise.then(x => {
//   console.log(x);
// });

// const source$ = Rx.Observable.fromPromise(myPromise);

// source$.subscribe(x => console.log(x));

function getUser(username){
  return $.ajax({
    url: 'https://api.github.com/users/'+username,
    dataType: 'jsonp'
  }).promise();
}

// getUser('jackhkmatthews')
//   .then(x => {
//     console.log(x)
//   });

// Rx.Observable.fromPromise(getUser('jackhkmatthews'))
// .subscribe(x => {
//   $('#name').text(x.data.name);
// });

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

inputSource$.subscribe(e => {
  getUser(e.target.value)
    .then( x => {
      console.log('promise: ', x);
    })
})

inputSource$.subscribe(e => {
  Rx.Observable.fromPromise(getUser(e.target.value))
    .subscribe(x => {
      // $('#name').text(x.data.name);
      console.log('stream: ', x);
    });
});

