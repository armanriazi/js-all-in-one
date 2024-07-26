///
/// ```bash
/// node ./src/es6/variables/ConstAndLet.js
/// ```
///


const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
console.log(statuses);
console.log('------Next------');

var a = 1;

{
  let b = 2;
}

console.log(a); // 1
//console.log(b); // ReferenceError, b is undefined

// console.log('------Next------');
// function f() {
//   {
//     let x;
//     {
//       // okay, block scoped name
//       const x = "sneaky";
//       // error, const
//       x = "foo";
//     }
//     // error, already declared in block
//     let x = "inner";
//   }
// }
// console.log(x); //SyntaxError: Identifier 'x' has already been declared



console.log('------Next------');
console.log('------Hoisting------');
{
  console.log(foo); // 'foo'
  //console.log(bar); // ReferenceError: bar is in the 'TDZ'
  var foo = 'foo';
  let bar = 'bar';
}

console.log('------Next------');
console.log('------LoopScope------');


for (var i=1; i<=5; i++) {
  setTimeout(function(){
      console.log(i);
  }, i*100);
}
// 6,6,6,6,6

setTimeout(function(){
  console.log('------Waitting------');
}, 5000);

for (let i=1; i<=5; i++) {
  setTimeout(function(){
      console.log(i);
  }, i*100);
}
// 1,2,3,4,5