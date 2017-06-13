function Console(message) {
  console.log('Message', message);
  return function (target) {
    console.log('Our decorated class', target);
  }
}

@Console('Hey!')
class ExampleClass {
	constructor() {
  	console.log('Yo!');
  }
}