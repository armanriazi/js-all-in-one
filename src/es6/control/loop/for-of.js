///
/// ```bash
/// node ./src/es6/control/loop/for-of.js
/// ```
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

// Example 2
const numbers = [1, 2, 3, 4];
let total = 0;

for (let number of numbers) {
  total += number;
}
console.log(total);
