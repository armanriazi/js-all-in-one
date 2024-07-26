///
/// ```bash
/// node ./src/es6/helpers/TheFilterHelper.js
/// ```
///

let products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];
// loop the array by using for loop eq. filter
// let filteredProducts = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].type === 'fruit') {
//     filteredProducts.push(products[i]);
//   }
// }
let filteredProducts1 = products.filter(product => product.type === 'fruit');

console.log(filteredProducts1);
console.log('------Next------');

// Filter out:  (1) 'vegetable' Type
//              (2) quantity is greater than 0
//              (3) price is less than 10
let products2 = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];
let filteredProducts2 = products2.filter(
  (product) =>
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
);
console.log(filteredProducts2);
console.log('------Next------');

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

let filteredNumbers = numbers.filter(number => number > 50);

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

let filteredUsers = users.filter(user => user.admin);

console.log(filteredProducts1);
console.log('------Next------');

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});


console.log(lessThanFifteen);
console.log('------Next------');

function reject(array, iteratorFunction) {
  return array.filter(item => !iteratorFunction(item));
}
