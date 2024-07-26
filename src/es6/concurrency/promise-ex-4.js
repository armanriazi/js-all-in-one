///
/// ```bash
/// node ./src/es6/concurrency/promise-ex-4.js
/// ```

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));