///
/// ```bash
/// node ./src/es6/helpers/TheReduceHelper.js
/// ```
///

let numbers = [ 10, 20 , 30 ];

// loop the array by using for loop : eq. reduce
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// loop the array by using reduce helper
let sum1 = numbers.reduce((value, number) => value + number, 0);

console.log(sum1);
console.log('------Next------');


let primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

let colors = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, ['Black']);

console.log(colors);
