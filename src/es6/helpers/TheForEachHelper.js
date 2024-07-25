///
/// ```bash
/// node ./src/es6/helpers/TheForEachHelper.js
/// ```
///
let sum = 0                     // create a variable to hold the sum
let numbers = [1, 2, 3, 4, 5];  // create an array of numbers to be added
numbers.forEach(num => sum += num);
console.log(numbers);

console.log('------Next------');

function handlePosts() {
  let posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];

  posts.forEach(post => savePost(post));
}


console.log('------Next------');

let images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

let areas = [];
images.forEach(image => areas.push(image.height * image.width));
//let f= images.forEach(image => image);// foreach dosen't have return of an array in spite of map
console.log(areas);
