///
/// ```bash
/// node ./src/es6/concurrency/promise-ex-13.js
/// ```
/*Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

    {status:"fulfilled", value:result} for successful responses,
    {status:"rejected", reason:error} for errors.
*/

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });
  });

/*[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]*/