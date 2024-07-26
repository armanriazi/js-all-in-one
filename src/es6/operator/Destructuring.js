///
/// ```bash
/// node ./src/es6/operator/Destructuring.js
/// ```
let expense = {
  type: 'Businsess',
  amount: '$45 USD'
};

// assign variables without destructuring assignment
// const type = expense.type;
// const amount = expense.amount;

// assign variables with destructuring assignment
const { type, amount } = expense;

console.log('------Next------');

let savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};
function fileSummary({ name, extension, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}
console.log(fileSummary(savedFiled, { color: 'red' }));

console.log('------Next------');


const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, name2, ...rest ] = companies;

console.log( name, name2, ...rest);

console.log('------Next------');

const companies2 = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

// result: 'Mountain View'
const [{ location2 }] = companies2;
console.log(location2);

const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

// result: 'Mountain View'
const { locations: [ location3 ] } = Google;
//console.log(locations);


console.log('------Next------');

const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"],
];
const classesAsObject = classes.map(([ subject, time, teacher ]) => ({ subject, time, teacher }));

console.log(classesAsObject);
console.log('------Next------');

const numbers = [0,1, 2, 3];

function double([number, ...rest]) {
  return rest.length === 0 ? [number * 2] : [number * 2, ...double(rest)];
}
console.log(double(numbers));

console.log('------Next------');

    var user = {
    	name : 'Deepak',
      username : 'dipakkr',
      password : 12345
    }

    const {namee, username, password} = user;
    console.log(namee);
    console.log(username);
    console.log(password);

    //Example 2 - Array Destructing

    const fruits = ["apple", "mango", "banana", "grapes"];

    const [fruit1, fruit2, fruit3] = fruits;

    console.log(fruit1); // apple
    console.log(fruit2); // mango
    console.log(fruit3); // banana