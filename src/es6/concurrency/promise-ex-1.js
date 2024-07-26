///
/// ```bash
/// node ./src/es6/concurrency/promise-ex-1.js
/// ```
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
      //reject(new Error("Whoops!"));       resolve("Resolved");
    }, 3000);
  });
  
  promise
     .then((result) => console.log(`Finally finished: ${result}!`)) // <-- .then shows "value"
     .then((error) => console.log(`I was also ran: ${error}!`)) // <-- .then shows "value"    
    .catch(function(error) {
          console.log(error);
    })
      // runs when the promise is settled, doesn't matter successfully or not
    .finally(console.log("stop loading indicator"))  // triggers first
    ;  
