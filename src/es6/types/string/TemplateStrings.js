///
/// ```bash
/// node ./src/es6/types/string/TemplateStrings.js
/// ```
///

// function getMessage() {
//   const year = new Data().getFullYear();
//   return `The year is ${year}.`;
// }
// getMessage();

console.log('------Next------');

// function doubleMessage(number) { //eq back trick Symbol below
//   return "Your number doubled is " + (2 * number);
// }

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

console.log(doubleMessage(5));