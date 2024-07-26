///
/// ```bash
/// node ./src/es6/concurrency/promise-ex-14.js
/// ```
//Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1