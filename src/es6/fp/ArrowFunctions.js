///
/// ```bash
/// node ./src/es6/fp/ArrowFunctions.js
/// ```
///
// ECMAScript 5: The `funcion` keyword
const add = function(a, b) {
  return a + b;
}

// ECMAScript 6: Arrow Functions
const add2 = (a, b) => a + b;

console.log(add2(2,5));

console.log('------Next------');

const numbers = [1, 2, 3];
numbers.map(number => 2 * number);
console.log(numbers);


console.log('------Next------');

  const add3 = (a, b) => {
      return a+b;
  }
  add3(5, 10)

  const x = [1, 2, 3, 4, 5];
  const square = x.map(num => num*num);
  console.log(square);


var addd = (a,b) => a+b;
console.log(`add ${addd}`)
console.log('------Next------');

console.log('------Single Argument------');
var odd = n => n % 2;
console.log(`odd ${odd(1)}`)

console.log('------No Arguments------');

var random = () => Math.random();
console.log(`random ${random}`)

console.log('------Multiple Expressions------');

var shout = s => {
  s = s.toUpperCase();
  s = s + '!';
  return s;
}

console.log(`shout ${shout('arman')}`)

console.log('------Lexical this------');

function Counter () {
  this.count = 0;
  setInterval(() => this.count++, 1000);
  return this.count ;
}

var counter = new Counter();

console.log(`counter ${counter}`)

console.log('------Concise Functional Iteration------');

var data = ['one', 'two', 'three'];
var processed = data
  .map(s => s.length)
  .filter(length => length < 5);

console.log(`processed ${processed}`)