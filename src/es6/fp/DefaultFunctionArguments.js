///
/// ```bash
/// node ./src/es6/fp/DefaultFunctionArguments.js
/// ```


function User(id) {
  this.id = id;
}
function generateId() {
  return Math.random * 9999999;
}
function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

// create a new user when call function
createAdminUser();
// use the given user instead of creating new one
const user = new User(generateId());
console.log(createAdminUser(user));