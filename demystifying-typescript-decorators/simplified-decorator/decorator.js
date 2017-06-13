var __decorate = function (decorators, target) {
  decorators[0](target);
  return target;
};

function Console(message) {
  console.log('Message', message);
  return function (target) {
    console.log('Our decorated class', target);
  };
}

class ExampleClass {
  constructor() {
    console.log('Yo!');
  }
}

ExampleClass = __decorate([
  Console('Hey!')
], ExampleClass);
