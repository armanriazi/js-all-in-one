///
/// ```bash
/// node ./src/es6/concurrency/promise-ex-9.js
/// ```

// This feature allows us to integrate custom objects with promise chains without having to inherit from Promise.
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    //console.log(resolve); // function() { native code }
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}
new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result); // (*)
  })
  .then(console.log); // shows 2 after 1000ms