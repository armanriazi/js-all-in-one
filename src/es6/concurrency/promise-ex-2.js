///
/// ```bash
/// node ./src/es6/concurrency/promise-ex-2.js
/// ```

    new Promise((resolve, reject) => {
      throw new Error("error");
    })
      .finally(() => console.log("Promise ready")) // triggers first
      .catch(err => console.log(err));  // <-- .catch shows the error