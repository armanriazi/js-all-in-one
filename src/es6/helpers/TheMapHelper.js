///
/// ```bash
/// node ./src/es6/helpers/TheMapHelper.js
/// ```
///
let numbers = [1, 2, 3];
let doubleNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubleNumbers.push(numbers[i] * 2);
// }
doubleNumbers = numbers.map(number => number *2); //eq: code above for
console.log(doubleNumbers);

console.log('------Next------');

let cars = [
  { model: 'Buick', price: 'cheap' },
  { model: 'Camaro', price: 'expensive' }
];
let prices = cars.map(car => car.price);
console.log(prices);

console.log('------Next------');


let trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

let speeds = trips.map(trip => trip.distance / trip.time);
console.log(speeds);

console.log('------Next------');

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
//var person = { name: 'Bill' };//eq: person['name'];
function pluck(array, property) {
  return array.map(object => object[property]);
}
let p= pluck(paints, 'color');
console.log(p);


