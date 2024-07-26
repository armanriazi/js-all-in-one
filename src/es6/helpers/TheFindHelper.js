///
/// ```bash
/// node ./src/es6/helpers/TheFindHelper.js
/// ```
///
let users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

// loop the array by using for loop
let user1 = '';
for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user1 = users[i];
    break;
  }
}

// loop the array by using find() method
let user2 = users.find(user => user.name === 'Alex');
console.log(user2);
console.log('------Next------');

function Car(model) {
  this.model = model;
}

let cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

let car1=cars.find(car => car.model === 'Focus');
console.log(car1);