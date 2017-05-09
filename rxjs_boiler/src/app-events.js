import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');
const input = $('#input');
const output = $('#output');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(e => {
  console.log(e)
},
err => {
  console.log('error')
},
() => {
  console.log('completed')
})

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(e => {
  console.log(e.currentTarget.value);
  output.html(e.target.value);
},
err => {
  console.log('error')
},
() => {
  console.log('completed')
})

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

moveStream$.subscribe(e => {
  console.log(e.currentTarget.value);
  output.html(`<h1>x: ${e.clientX}, y: ${e.clientY}</h1>`);
},
err => {
  console.log('error')
},
() => {
  console.log('completed')
})
