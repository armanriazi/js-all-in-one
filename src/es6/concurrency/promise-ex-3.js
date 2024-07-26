///
/// ```bash
/// node ./src/es6/concurrency/promise-ex-3.js
/// ```

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(result=> console.log(result));