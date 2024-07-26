///
/// ```bash
/// node ./src/es6/operator/RestAndSpreadOperator.js
/// ```
///
console.log('------Rest------');
function addNumbers(...numbers) { // (numbers) will have different result
    return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(addNumbers([1, 2, 3, 4, 5]));

console.log('------Spread------');

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
// use concat() method
// ['red', 'green', 'orange', 'yellow']
colors = defaultColors.concat(userFavoriteColors);
// use spread operators
colors = [...defaultColors, ...userFavoriteColors];
console.log(colors);

console.log('------Mix both------');
function validShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
      return ['milk', ...items];
    }
    return items;
}  
console.log(validShoppingList('oranges', 'bread', 'eggs'));
  
console.log('------Next------');

const MathLibrary = {
    calculateProduct(...rest) {
      console.log('Please use the multiply method instead');
      return this.multiply(...rest);
    },
    multiply(a, b) {
      return a * b;
    }
}
console.log(MathLibrary.calculateProduct(2,5));

console.log('------Next------');

// function product(a, b, c, d, e) { //eq. next block code
//     var numbers = [a, b, c, d, e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
// }

function product(...numbers) {
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }
  
console.log(product(20,5));

console.log("------------Next---------");

function add(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}

console.log(add(3, 4, 5, 10, 20)); // 42

console.log(add(1, 3, 4)); // 8



console.log("------------Next---------");

// const array = [1, 2, 3];
// const copiedArray = ...array;
// console.log(copiedArray); // [1, 2, 3]