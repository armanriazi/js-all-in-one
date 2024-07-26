# Section 17: Promises and Fetch

- [Code Execution in JavaScript](#code-execution-in-javascript)
- [Terminology of Promises](#terminology-of-promises)
- [Use Promises](#use-promises)
- [Ajax Requests with `fetch`() Helper](#ajax-requests-with-fetch-helper)

## Code Execution in JavaScript

Before answer the question about "What's Promise?", we need to know how does JavaScript execute codes.

<br/>
<div align="right">
  <b><a href="#section-17-promises-and-fetch">[ ↥ Back To Top ]</a></b>
</div>
<br/>

## Terminology of Promises

For supporting asynchronous programming, JavaScript uses a callback. However, the callback implementation has a major problem which is called as Callback hell. Promises come to rescue to solve the problem of callback hell.

Promises are a pattern that greatly simplifies asynchronous programming by making the code look synchronous and avoid problems associated with callbacks.

A Promise has three states.

- [x] pending: Initial state, neither fulfilled nor rejected.
- [x] fulfilled: It means that the operation completed successfully.
- [x] rejected: It means that the operation failed.


<p align="center">
  <img src="https://i.imgur.com/NJBcnWP.png" alt="Three States of Promises" height="250px">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/dipakkr/ES6-Guide/master/assets/promises.png" alt="ES6 : Promises" height="250px">
</p>

- `unresolved`
- `resolved`
- `rejected`

<br/>
<div align="right">
  <b><a href="#section-17-promises-and-fetch">[ ↥ Back To Top ]</a></b>
</div>
<br/>

## Use Promises

The vast majority of use promises is working with Ajax requests but we can make promises without Ajax requests. Moreover, the promises are used to solve the issue of asynchronous code. Note that the trick to dealing with asynchronous code is through **how we call `resolve()` and `reject()`**.

There are important note about finally:

- [x] A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures. Please take a look at the example above: as you can see, the finally handler has no arguments, and the promise outcome is handled by the next handler.
- [x] A finally handler “passes through” the result or error to the next suitable handler.
    For instance, here the result is passed through finally to then:

```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
      //reject(new Error("Whoops!"));       resolve("Resolved");
    }, 3000);
  });
```

```javascript
  promise
     .then((result) => console.log(`Finally finished: ${result}!`)) // <-- .then shows "value"
     .then((error) => console.log(`I was also ran: ${error}!`)) // <-- .then shows "value"    
    .catch(function(error) {
          console.log(error);
    })
      // runs when the promise is settled, doesn't matter successfully or not
    .finally(console.log("stop loading indicator"))  // triggers first
    ;  
```

```javascript
new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => console.log("Promise ready")) // triggers first
  .catch(err => console.log(err));  // <-- .catch shows the error
```


### Re-resolve a promise?

What’s the output of the code below?

```javascript
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
// Output: 1
```

Next:

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));
// Output: runs after 3 seconds
```

This feature allows us to integrate custom objects with promise chains without having to inherit from Promise.

```javascript
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
  // Output: 2
```

<br/>
<div align="right">
  <b><a href="#section-17-promises-and-fetch">[ ↥ Back To Top ]</a></b>
</div>
<br/>

## Ajax Requests with `fetch`() Helper

The `fetch()` helper is the feature that is just like promises implemented inside the browsers already.

```javascript
url = 'http://jsonplaceholder.typicode.com/posts/'
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .then(function(text) {
    // ...and here's the content of the remote file
    console.log(text); // {"name": "iliakan", "isAdmin": true}
  });
```

### Promise All
Let’s say we want many promises to execute in parallel and wait until all of them are ready.

For instance, download several URLs in parallel and process the content once they are all done.

That’s what Promise.all is for.

```javascript
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2,
  3
]).then(console.log); // 1, 2, 3
```

Next:

```javascript
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member

```

### Promise.allSettled

Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

- [x] {status:"fulfilled", value:result} for successful responses,
- [x] {status:"rejected", reason:error} for errors.


```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
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
```

### Polyfill

If the browser doesn’t support Promise.allSettled, it’s easy to polyfill:

```javascript
if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: 'rejected', reason });

  const resolveHandler = value => ({ status: 'fulfilled', value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
  };
}
```

### Promise.race

Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

```javascript
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // OUtput 1
```

### Promise.any

Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

```javascript
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1
```

The method is used for compatibility, when a function is expected to return a promise.

For example, the loadCached function below fetches a URL and remembers (caches) its content. For future calls with the same URL it immediately gets the previous content from cache, but uses Promise.resolve to make a promise of it, so the returned value is always a promise:

```javascript
let cache = new Map();
function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}
```

### Unhandled rejection

```javascript
let promise = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch(err => console.log('caught')), 1000);
```

### Fetch

```javascript
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => {
      img.remove();
      resolve(githubUser); // (**)
    }, 3000);
  }))
  // triggers after 3 seconds
  .then(githubUser => console.log(`Finished showing ${githubUser.name}`));
```

Because the `fetch()` helper only catch when the network request flat out fails. It's really highly recommend that still use Ajax utility libraries like `axios` or `jQuery`.

```javascript
Promise.all([
  fetch('/template.html'),
  fetch('/style.css'),
  fetch('/data.json')
]).then(render); // render method needs results of all fetches
```

Next:

```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));
```

<br/>
<div align="right">
  <b><a href="#section-17-promises-and-fetch">[ ↥ Back To Top ]</a></b>
</div>
<br/>
