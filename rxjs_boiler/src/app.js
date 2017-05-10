import $ from 'jQuery';
import Rx from 'rxjs/Rx';

// const source$ = Rx.Observable.interval(2000)
//   .take(10)
//   .map(v => v * v);

// source$.subscribe(v => {
//   console.log(v);
// });

// const source$ = Rx.Observable.from(['jack', 'james', 'tom'])
//   .map(v => v.toUpperCase())
//   .map(v => 'I am ' + v + '!');

// source$.subscribe(v => {
//   console.log(v);
// });

function getGithubUser(username) {
  return $.ajax({
    url: 'https://api.github.com/users/' + username,
    dataType: 'jsonp'
  }).promise();
}

Rx.Observable.fromPromise(getGithubUser('jackhkmatthews'))
  .map(user => {
    return user.data.name;
  })
  .subscribe(name => {
    console.log(name);
  });