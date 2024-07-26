///
/// ```bash
/// node ./src/es6/helpers/TheEveryAndSomeHelper.js
/// ```
///
let computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32}
];

// loop the array by using for loop: eq. some , every
// let allComputersCanRunProgram = true;
// let onlySomeComputersCanRunProgram = false;
// for (let i = 0; i < computers.length; i++) {
//   let computer = computers[i];
//   if (computer.ram < 16) {
//     allComputersCanRunProgram = false;
//   } else {
//     onlySomeComputersCanRunProgram = true;
//   }
// }
// loop the array by using every() and some() method
let allComputersCanRunProgram = computers.every(computer => computer.ram > 16);
let onlySomeComputersCanRunProgram = computers.some(computer => computer.ram > 16);

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);
console.log('------Next------');


class Field {
  constructor(value) {
    this.value = value;
  }

  validate() {
    return this.value.length > 0;
  }
}

let username = new Field("2cool");
let password = new Field("my_password");
let birthdate = new Field("10/10/2010");

let fields = [username, password, birthdate];
let formIsValid = fields.every(field =>  field.validate());

if (formIsValid) {
  console.log(formIsValid);
} else {
  console.log( error);// show an error message.
}

console.log('------Next------');


let users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

let hasSubmitted = users.every(user => user.hasSubmitted);
console.log(hasSubmitted);
console.log('------Next------');